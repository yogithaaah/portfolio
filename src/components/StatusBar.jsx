import React, { useRef, useEffect } from 'react'; // Added explicit hooks

const StatusBar = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="status-bar">
      <div className="status-item"><span className="dot"></span> SYSTEM ONLINE</div>
      <div className="status-item">LOC: VIJAYAWADA, IN</div>
      <div className="status-item">UPTIME: {time}</div>
      <div className="status-item" style={{ color: 'var(--neon-green)' }}>SEC_LEVEL: ALPHA</div>
    </div>
  );
};

export default StatusBar;   