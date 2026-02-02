import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import TerminalRoles from './components/TerminalRoles';
import StatusBar from './components/StatusBar';
import GlitchHeader from './components/GlitchHeader'; 
import BootSequence from './components/BootSequence';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';


const profileData = {
  name: "Yogitha Tippireddy",
  title: "Security Researcher | CSE Undergrad",
  about: "I am a computer science student learning and building expertise in penetration testing, vulnerability research, and secure architecture. I aim to apply my skills to strengthen cybersecurity defenses, contribute to ethical hacking initiatives, and develop innovative solutions that protect digital systems from emerging threats.",
  interests: "Security Research, VAPT, AI in Cybersecurity",
  certs: [
    { name: "Google Cybersecurity Professional Certificate", issuer: "Coursera", date: "2024", icon: "★" },
    { name: "Azure Fundamentals - AZ 900", issuer: "Microsoft", date: "2025", icon: "🌐" },
    { name: "Zero Trust Cloud Security", issuer: "Zscaler", date: "2025", icon: "🔒" },
    { name: "Introduction to Network Analysis", issuer: "Security Blue Team", date: "2024", icon: "🧪" }

  ],
  projects: [
  { 
    title: "Web Application Firewall (WAF)", 
    tech: "Safeline, Docker, DVWA", 
    desc: "Deployed a security-hardened environment to intercept and mitigate web-based attacks.", 
    longDesc: "Built a hands-on cybersecurity lab using a reverse proxy architecture to protect a vulnerable web application (DVWA). I configured SafeLine WAF to handle SSL termination, implement rate limiting, and block common injection attacks. The project involved simulating real-world threat patterns from a Kali Linux instance to validate the firewall's defensive capabilities.",
    substack: "https://yogithatippireddy.substack.com/p/i-built-a-web-application-firewall" 
  },
  { 
    title: "Insider Threat Detection", 
    tech: "Python, Deep Learning", 
    desc: "Used Deep learning techniques to predict insider threats.", 
    longDesc: "A research-focused project utilizing the CMU-CERT dataset. I developed an LSTM (Long Short-Term Memory) neural network to detect anomalous user behavior in event logs. The model achieves high accuracy in identifying unauthorized data exfiltration patterns before they escalate into full breaches.",
    link: "https://github.com/yogithaaah/Insider-Threat-Detection"
  },
  { 
    title: "Cybersecurity Home Lab", 
    tech: "Kali Linux, VirtualBox", 
    desc: "Established a virtualized environment for hands-on network security and penetration testing.", 
    longDesc: "Designed and configured a cybersecurity home lab using VirtualBox to host Kali Linux. I utilized the environment to practice network reconnaissance with Nmap, packet inspection via Wireshark, building a strong foundation in offensive security methodologies.",
    substack: "https://yogithatippireddy.substack.com/p/getting-started-with-kali-linux-for"
  },
  { 
    title: "Phishing Attack Simulator", 
    tech: "GoPhish, Railway", 
    desc: "Simulated real-world phishing attacks to evaluate user behavior.", 
    longDesc: "Using the GoPhish framework, I simulated end-to-end social engineering campaigns. I configured custom SMTP relays and landing pages to harvest simulated credentials. The project focused on analyzing 'click-through' metrics to design better security awareness training for organizations."
  },
  { 
    title: "Python Keylogger", 
    tech: "Python, Offensive Security", 
    desc: "A simple keylogger that records keystrokes to a text file.", 
    longDesc: "This Python-based keylogger leverages the pynput library to intercept and record real-time keyboard input through system-level event listeners. The application demonstrates event-driven programming and asynchronous file I/O by capturing keystrokes and persistently logging them to a local text file.",
    link: "https://github.com/yogithaaah/Keylogger"
  }
],
  skills: {
    Frameworks: ["OWASP Top 10", "NIST Cybersecurity Framework", "Burp Suite", "Web Application Security"],
    Tools: ["Linux", "Nmap", "Wireshark", "Network Reconnaissance", "Packet Analysis"],
    Languages: ["Python", "Java", "HTML", "CSS", "JavaScript"]
  },
  socials: {
    email: "ytippireddy@gmail.com",
    substack: "https://substack.com/@yogithatippireddy",
    github: "https://github.com/yogithaaah",
    linkedin: "https://www.linkedin.com/in/yogitha-tippireddy/" 
  }
};

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = React.useState("");

  // FIXED: Added React. before useEffect here
  React.useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}<span className="cursor">|</span></span>;
};


function App() {
  const [isBooting, setIsBooting] = React.useState(true);
  const [selectedProject, setSelectedProject] = React.useState(null);


  React.useEffect(() => {
    console.log("%c [!] SYSTEM ACCESS GRANTED", "color: #00ff41; font-weight: bold; font-size: 20px;");
    console.log("%c Candidate: Yogitha Tippireddy", "color: white;");
    console.log("%c Status: CSE Undergrad & Security Researcher", "color: #888;");
    console.log("%c Specialized in: Vulnerability Research & Cloud Security", "color: #888;");
  }, []);

  return (
    <>
      {isBooting ? (
        <BootSequence onComplete={() => setIsBooting(false)} />
      ) : (
        <>
          <Navbar />
          <MatrixBackground />
          <div className="container" style={{ maxWidth: '800px', margin: 'auto' }}>
            <header style={{ textAlign: 'center', padding: '50px 0' }}>
              <h1><TypingText text="Yogitha Tippireddy" speed={150} /></h1>
              <div style={{ minHeight: '1.5em', fontSize: '1.2rem', fontFamily: 'Fira Code' }}>
                <TerminalRoles 
                  roles={["Security Researcher", "CSE Undergraduate", "Vulnerability Hunter", "Cloud Security Enthusiast"]} 
                  speed={100} wait={1500} 
                />
              </div>
              <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn">View Projects</a>
                <a href="/resume.pdf" download="Yogitha_Resume.pdf" className="btn">Download Resume</a>
              </div>
            </header>

            <section id="about">
              <GlitchHeader title="About" />
              <p>{profileData.about}</p>
              <p><strong>Interests:</strong> {profileData.interests}</p>
              <p>📍 Vijayawada, India | ✉️ ytippireddy@gmail.com</p>
            </section>

            <section id="certs">
              <GlitchHeader title="Certifications" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {profileData.certs.map((cert, i) => (
                  <div key={i} className="project-card">
                    <span>{cert.icon}</span>
                    <div style={{ fontWeight: 'bold' }}>{cert.name}</div>
                    <small>{cert.issuer} | {cert.date}</small>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects">
            <GlitchHeader title="Projects" />
            {profileData.projects.map((proj, i) => (
              <div key={i} className="project-card" onClick={() => setSelectedProject(proj)} style={{ cursor: 'pointer' }}>
                <h3>{proj.title}</h3>
                <small><em>{proj.tech}</em></small>
                <p>{proj.desc}</p>
              {/* <span style={{ color: 'var(--neon-green)', fontSize: '0.8rem' }}>[CLICK_TO_EXPAND]</span> */}
              </div>
            ))}
          </section>

          {/* Add the Modal component at the bottom of the return block, before the final </div> */}
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />

          <section id="skills">
            <GlitchHeader title="Skills" />
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '15px',
              marginTop: '20px'
            }}>
              {/* Languages Module - Matches your "Languages" key */}
              <div className="project-card">
                <h3 style={{ fontSize: '1rem', color: 'var(--neon-green)' }}>[01] LANGUAGES</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                  {profileData.skills.Languages.map((lang, i) => (
                    <div key={i} className="skill-line">
                      <span className="line-prefix"> {">"} </span> {lang}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Module - Matches your "Tools" key */}
              <div className="project-card">
                <h3 style={{ fontSize: '1rem', color: 'var(--neon-green)' }}>[02] SEC_TOOLS</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                  {profileData.skills.Tools.map((tool, i) => (
                    <div key={i} className="skill-line">
                      <span className="line-prefix"> {">"} </span> {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks Module - Matches your "Frameworks" key */}
              <div className="project-card">
                <h3 style={{ fontSize: '1rem', color: 'var(--neon-green)', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                  [03] FRAMEWORKS
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                  {profileData.skills.Frameworks.map((framework, i) => (
                    <div key={i} className="skill-line">
                      <span className="line-prefix"> {">"} </span> {framework}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <GlitchHeader title="Reach Me" />
            <p>Feel free to connect with me via email or my social profiles:</p>
            
            {/* Centering the buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              flexWrap: 'wrap', 
              justifyContent: 'center', // This centers the buttons horizontally
              marginTop: '20px' 
            }}>
              <a href={`mailto:${profileData.socials.email}`} className="btn">Email Me</a>
              <a href={profileData.socials.substack} target="_blank" rel="noreferrer" className="btn">Substack</a>
              <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
              <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>  
            </div>
          </section>      
          <footer style={{ 
          textAlign: 'center', 
          padding: '40px 20px 300px 20px', /* Increased bottom padding to 150px */
          color: '#555' 
        }}>
          
        </footer>
            <StatusBar />
          </div>
        </>
      )}
    </>
  );
}

export default App;