import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Scandiweb test assignment by: Andreas Aus</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  height: 60px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default Footer;
