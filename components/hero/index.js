import React from 'react';
import Starfield from './starfield';
import HeroContent from './hero-content';

const Hero = ({ ...props }) => (
  <Starfield {...props}>
    <HeroContent />
  </Starfield>
);

export default Hero;
