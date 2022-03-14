import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there, Welcome To <br />
          Lungelo Packery's Portfolio
        </SectionTitle>
        <SectionText>
          I 've always wanted the best computer. That is what got me into programming. Building my skills everyday to better my chances of employment.
          With that being said, I've developed and furthered my skills. As time went, my love and passion for writing code became stronger.
          My main skills are Python, Java and Javascript.
        </SectionText>
        <Button onClick={() => window.location = 'https://twitter.com/LungeloPackery'}>Learn More</Button>
      </LeftSection>

    </Section>
);

export default Hero;