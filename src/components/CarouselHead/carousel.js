import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

import styled from "styled-components";

const Style = styled.div`
  width: 80%;
  height: 600px;
  margin: 0 auto 16px auto;

  margin-top: -100px;
  padding-top: 100px;

  @media screen and (max-width: 720px)  {
    padding-top: 60px;
    width: 30%;
    height: 400px;
    margin: 0px auto 16px auto;
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    padding-top: 60px;
    height: 500px;
    width: 50%;
    margin: 0px auto 24px auto;
  }
`;

export const CarouselHead = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    goToSlideDelay: 5000,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  });

  let slides = [
    {
      key: v4(),
      content: <img src="/media/home/1.webp" alt="1" />,
    },
    {
      key: v4(),
      content: <img src="/media/home/2.webp" alt="2"/>,
    },
    {
      key: v4(),
      content: <img src="/media/home/3.webp" alt="3" loading="lazy"/>,
    },
    {
      key: v4(),
      content: <img src="/media/home/4.webp" alt="4" loading="lazy"/>,
    },
    {
      key: v4(),
      content: <img src="/media/home/5.webp" alt="5" loading="lazy"/>,
    },
    {
      key: v4(),
      content: <img src="/media/home/6.webp" alt="6"/>,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        goToSlide: (prevState.goToSlide + 1) % slides.length,
      }));
    }, state.goToSlideDelay || 5000); // Change the duration as needed (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [slides.length, state.goToSlideDelay]);

  return (
    <Style
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        goToSlideDelay={100}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </Style>
  );
};
