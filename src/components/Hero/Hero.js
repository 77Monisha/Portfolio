import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hii, My Name is Monisha Chaurasia &<br/>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Front-End Developer  |  Designer 
      </SectionText>
      <Button  onClick={() => window.location = 'https://drive.google.com/file/d/18AAVHt5G-__S4tp2EQEZzPNDDLnkevaj/view?usp=sharing'}>Resume</Button>

    </LeftSection>
  </Section>
);

export default Hero;