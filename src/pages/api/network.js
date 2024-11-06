// src/pages/api/network.js
import os from 'os';

export default function handler(req, res) {
  const networkInterfaces = os.networkInterfaces();
  
  const result = {
    ipv4: null,
    ipv6: null,
    internalIp: null,
    ethernetIp: null
  };

  // Iterate through the network interfaces
  for (const name of Object.keys(networkInterfaces)) {
    for (const net of networkInterfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        if (!result.ipv4) result.ipv4 = net.address;
        if (name.toLowerCase().includes('ethernet') && !result.ethernetIp) result.ethernetIp = net.address;
      }
      if (net.family === 'IPv6' && !net.internal && !result.ipv6) {
        result.ipv6 = net.address;
      }
      if (net.internal && net.family === 'IPv4' && !result.internalIp) {
        result.internalIp = net.address;
      }
    }
  }

  res.status(200).json(result);
}
