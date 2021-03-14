import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Carousel from './Carousel';
import Footer from './Footer';

const App = () => {
  return (
    <AppWrapper>
      <Title />
      <Carousel />
      <Footer />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100vw;
  margin: 5rem auto;
  max-width: 1170px;
  @media (max-width: 992px) {
    width: 95vw;
  }
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

export default App;
