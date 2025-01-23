export default async function handler(req, res) {
  try {
    const response = await fetch('https://chemotion.net/search-index.json');
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch remote data' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal error' });
  }
}
