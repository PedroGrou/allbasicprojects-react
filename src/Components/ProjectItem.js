import React from 'react';

function ProjectItem({ image, link, title }) {
  return (
    <article className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-img" src={image} alt={title} />
        <div className="project-info">{title}</div>
      </a>
    </article>
  );
}

export default ProjectItem;
