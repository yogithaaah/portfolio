import React, { useState, useEffect } from 'react';

const BootSequence = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const bootLines = [
    "[INFO] Initializing kernel...",
    "[INFO] Loading security_modules.bin",
    "[OK] Establishing encrypted tunnel...",
    "[INFO] Scanning for vulnerabilities...",
    "[OK] No threats detected.",
    "[INFO] Loading Yogitha_Tippireddy_Profile.sys",
    "[SUCCESS] Access Granted."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setLogs(prev => [...prev, bootLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000); // Finish 1 second after last line
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: '#0a0a0a', color: '#00ff41', zIndex: 100000,
      fontFamily: 'Fira Code', padding: '20px', display: 'flex', 
      flexDirection: 'column', justifyContent: 'center'
    }}>
      {logs.map((log, i) => (
        <div key={i} style={{ marginBottom: '5px' }}>{log}</div>
      ))}
    </div>
  );
};

export default BootSequence;