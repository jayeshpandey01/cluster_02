export default function handler(req, res) {
  res.status(200).json({ API_BASE_URL: process.env.API_BASE_URL || '' });
}
