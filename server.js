const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint for uptime monitors
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'online', timestamp: Date.now() });
});

// Stream proxy / resolution route
app.get('/api/stream', async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: 'Missing track ID or query parameter' });
    }

    // Add your stream extraction/forwarding logic here
    // This securely handles requests on your own private infrastructure without public rate limits
    
    res.status(200).json({ success: true, message: 'Proxy route active' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Relay server running on port ${PORT}`);
});