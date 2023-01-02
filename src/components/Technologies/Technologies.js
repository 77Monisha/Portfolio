import React from 'react';
import { DiHtml5, DiReact, DiCss3, DiJavascript, DiIllustrator, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I enjoy working with Front-End Technologies : </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size='3rem'/>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size='3rem'/>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size='3rem'/>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>ReactJS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiIllustrator size='3rem'/>
        <ListContainer>
          <ListTitle>Illustrator</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size='3rem'/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
