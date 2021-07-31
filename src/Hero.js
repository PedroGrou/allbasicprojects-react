import React from 'react';
import react from './images/react-project.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>React Projects</h1>
          <p>
            ReactJS has become highly popular because of its extra <span>simplicity</span> and <span>flexibility</span>.
            Many people are even referring to it as the future of web development. It is estimated that more than 1,300
            developers and over 94,000 sites use ReactJS.
          </p>
        </article>
        <article className="hero-images">
          <img src={react} alt="phone" className="react-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
