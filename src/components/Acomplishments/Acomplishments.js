import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { CertificateName : 'Introduction to Web Development with HTML, CSS, JavaScript', By : 'IBM Skills Network'},
  { CertificateName: 'Programming with JavaScript', By: 'Meta', },
  { CertificateName: 'Certification in Astronomy Olympiad', By: 'NSO', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.CertificateName}`}</BoxNum>
          <br/>
          <BoxText>{card.By}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
