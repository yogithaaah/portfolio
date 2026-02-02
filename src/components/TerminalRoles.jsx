import React, { useRef, useEffect } from 'react'; // Added explicit hooks

const TerminalRoles = ({ roles, speed = 100, wait = 1500 }) => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [phase, setPhase] = React.useState("typing"); 
  // phases: typing | waiting | deleting

  React.useEffect(() => {
    let timeout;

    if (phase === "typing") {
      if (charIndex < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, speed);
      } else {
        setPhase("waiting");
      }
    }

    else if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, wait);
    }

    else if (phase === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, speed / 2);
      } else {
        setPhase("typing");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, roleIndex, roles, speed, wait]);

  return (
    <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>
      {`> ${roles[roleIndex].slice(0, charIndex)}`}
      <span className="cursor">|</span>
    </span>
  );
};

export default TerminalRoles;