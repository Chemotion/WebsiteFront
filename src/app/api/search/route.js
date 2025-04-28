import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://docs.chemotion.net/search-index.json');

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch remote data' }, { status: response.status });
    }

    const data = await response.json();

    if (!data || typeof data !== 'object') {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 500 });
    }

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate'
      }
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
