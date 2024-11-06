// src/pages/api/user.js
import os from 'os';
import requestIp from 'request-ip';
import useragent from 'useragent';

export default function handler(req, res) {
  const clientIp = requestIp.getClientIp(req) || 'IP not available';

  const agent = useragent.parse(req.headers['user-agent']);
  const browser = `${agent.toAgent()} on ${agent.os}`;

  const incognito = req.headers['sec-ch-ua'] ? "No" : "Yes";
  const vpn = "No";

  const networkInterfaces = os.networkInterfaces();
  const result = {
    ipv4: null,
    ipv6: null,
    internalIp: null,
    ethernetIp: null,
  };

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

  // Generate userId only once on the server
  const userId = Math.random().toString(36).substring(2, 18);

  res.status(200).json({
    userId,
    clientIp,
    browser,
    incognito,
    vpn,
    ipv4: result.ipv4,
    ipv6: result.ipv6,
    internalIp: result.internalIp,
    ethernetIp: result.ethernetIp,
  });
}
