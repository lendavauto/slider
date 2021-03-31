import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  height: 60px;
  margin-top: 30px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Scandiweb test assignment by: Andreas Aus</p>
    </FooterWrapper>
  );
};

export default Footer;
