import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content project-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>[X] CLOSE_SESSION</button>
        
        <h2 style={{ borderBottom: '1px solid var(--neon-green)' }}>{project.title}</h2>
        <p style={{ color: 'var(--neon-green)', fontSize: '0.9rem' }}>TECH_STACK: {project.tech}</p>
        
        <div className="modal-body">
          <p>{project.longDesc}</p>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginTop: '20px', flexWrap: 'wrap' }}>
          {/* Only show GitHub link if 'link' exists in the project object */}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="btn" style={{ fontSize: '0.8rem' }}>
              VIEW_SOURCE (GITHUB)
            </a>
          )}
          
          {/* Only show Substack link if 'substack' exists in the project object */}
          {project.substack && (
            <a href={project.substack} target="_blank" rel="noreferrer" className="btn" style={{ fontSize: '0.8rem' }}>
              READ_WRITEUP (SUBSTACK)
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;