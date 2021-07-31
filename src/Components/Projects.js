import React, { useState } from 'react';
import data from '../data';
import ProjectItem from './ProjectItem';

function Projects() {
  const [projects] = useState(data);
  return (
    <section className="projects">
      <div className="title">
        <h2>Basic Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project, id) => {
          return <ProjectItem key={id} {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
