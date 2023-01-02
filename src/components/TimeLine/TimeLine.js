import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        AS A FRONT-END DEVELOPER, I BUILD VALUABLE CODE WHICH IS EFFICIENT AND CREATES A POSITIVE IMPACT ON THE WORLD.
        <br/>
        <br/>
        I SPEND MY DAYS WITH MY HANDS IN FRONT-END ENGINEERING (HTML, CSS, AND JAVASCRIPT & REACT JS ). I CARE DEEPLY ABOUT CREATING WORLD-CLASS, USEFUL, AND BEAUTIFUL PRODUCTS THAT HELP PEOPLE AND MAKE A DIFFERENCE.
      </SectionText>
    </Section>
  );
};

export default Timeline;
