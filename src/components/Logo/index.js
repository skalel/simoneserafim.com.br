import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Styles = styled.div`
  display:flex;
  flex: 1;

  transition: all 0.5s ease-in-out;

  #logo-header {
    margin: 16px 24px;
    flex: 1;
    background-color: transparent;

    > a {
      height: 100%;
      background-color: transparent;
    }

    > a > img {
      width: 120px;
      background-color: transparent;
    }
  }

  .shrink{
    margin: 4px 0 4px 42px;

    > a > img {
      width: 100px;
    }
  }
`;

const LogoHeader = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolling(scrollTop > 95);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Styles className={scrolling ? 'shrink' : ''}>
      <div id="logo-header">
        <HashLink smooth to="/#top">
          <img src="/media/logo.webp" alt="Simone Serafim" width={120} />
        </HashLink>
      </div>
    </Styles>
  );
};

export default LogoHeader;
