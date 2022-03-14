import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Open Source Projects' },
  { number: 45, text: 'Java Project', },
  { number: 60, text: 'Python Project', },
  { number: 40, text: 'Overall Contributions On GitHub', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
