// src/app/page.js
"use client";

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUserInfo(data);
    };

    fetchUserData();

    // Generate userId on the client side after component mounts
    setUserId(Math.random().toString(36).substring(2, 18));
  }, []);

  return (
    <div className="container">
      {userInfo ? (
        <div className="card">
          <div className="title">Your ID</div>
          <div className="data">{userId || 'Loading...'}</div>
          <div className="title">IP Address</div>
          <div className="data">{userInfo.clientIp}</div>
          <div className="title">IPv4</div>
          <div className="data">{userInfo.ipv4}</div>
          <div className="title">IPv6</div>
          <div className="data">{userInfo.ipv6}</div>
          <div className="title">Internal IP</div>
          <div className="data">{userInfo.internalIp}</div>
          <div className="title">Ethernet IP</div>
          <div className="data">{userInfo.ethernetIp}</div>
          <div className="title">Browser</div>
          <div className="data">{userInfo.browser}</div>
          <div className="title">Incognito Mode</div>
          <div className="data">{userInfo.incognito}</div>
          <div className="title">VPN</div>
          <div className="data">{userInfo.vpn}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f7f7f7;
        }
        .card {
          border: 2px solid #f36d21;
          border-radius: 8px;
          padding: 20px;
          background: #ffffff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 300px;
          text-align: center;
          color: #333;
        }
        .title {
          font-size: 1.2em;
          margin-bottom: 10px;
          color: #f36d21;
          font-weight: bold;
        }
        .data {
          margin: 8px 0;
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}
