// src/components/UserInfoCard.js
import React from 'react';

const UserInfoCard = ({ userId, clientIp, browser, incognito, vpn }) => {
  return (
    <div className="card">
      <div className="title">Your ID</div>
      <div className="data">{userId}</div>
      <div className="title">IP</div>
      <div className="data">{clientIp}</div>
      <div className="title">Browser</div>
      <div className="data">{browser}</div>
      <div className="title">Incognito</div>
      <div className="data">{incognito}</div>
      <div className="title">VPN</div>
      <div className="data">{vpn}</div>
      <style jsx>{`
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
};

export default UserInfoCard;
