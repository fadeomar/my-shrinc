import React from 'react';
import { Link } from 'react-router-dom';

const signUpLink = () => (
  <div className="sign-up-link">
    <p className="content">Are you therapist? &nbsp;&nbsp;</p>
    <Link to="sign-up" className="link">
      Sign Up
    </Link>
  </div>
);

export default signUpLink;
