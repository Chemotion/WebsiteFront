import axios from 'axios';

const strapiUrl = process.env.STRAPI_URL || 'http://localhost:1337';

export async function fetchIntro() {
  const res = await axios.get(`${strapiUrl}/intro-sections`);
  return res.data;
}

export async function fetchDummySections() {
  const res = await axios.get(`${strapiUrl}/dummy-sections`);
  return res.data;
}
