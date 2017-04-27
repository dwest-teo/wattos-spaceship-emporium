import React from 'react';
import PropTypes from 'prop-types';
import Starfield from './starfield';
import HeroContent from './hero-content';

const Hero = ({ heading, subheading, ...props }) => (
  <Starfield {...props}>
    <HeroContent heading={heading} subheading={subheading} />
  </Starfield>
);

Hero.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

Hero.displayName = 'Hero';

export default Hero;
