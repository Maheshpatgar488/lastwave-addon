export default function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing track ID or query parameter' });
  }

  // Add your stream extraction/forwarding logic here
  return res.status(200).json({ 
    success: true, 
    message: 'Vercel proxy route active',
    trackId: id 
  });
}