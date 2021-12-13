import React from 'react';
// import { ProfilePic } from '../../constants/constants';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Jon Garces
        <br />
        {/* {image} */}
      
        {/* Full-Stack Developer */}
        {/* <br />
        Full-Stack Developer */}
      </SectionTitle>
      <SectionText>
        <h1>Full-Stack Developer</h1>
        {/* The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps. */}
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;