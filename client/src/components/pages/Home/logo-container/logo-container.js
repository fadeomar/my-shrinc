import React from 'react';
import { Logo } from '../../../assets';
import './logo-container.css';

const LogoContainer = () => (
  <>
    <div className="logo-container">
      <Logo />
      <div className="logo-container_content">
        <h1>Shrinc</h1>
        <h3>therapy, simplified</h3>
      </div>
    </div>
    <p className="home-paragraph">
      The key to natures therapy is feeling like a tiny part of it, not a master
      over it.
    </p>
  </>
);

export default LogoContainer;
