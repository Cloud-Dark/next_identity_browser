
const deviceIds = {}; 

export default function handler(req, res) {
  const { fingerprint } = req.body;

  if (fingerprint) {
    
    if (!deviceIds[fingerprint]) {
      deviceIds[fingerprint] = fingerprint; 
    }

    return res.status(200).json({ deviceId: deviceIds[fingerprint] });
  }

  return res.status(400).json({ error: 'Fingerprint not provided' });
}

