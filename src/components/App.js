import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Blobs from './Blobs';
import Carousel from './Carousel';
import Footer from './Footer';
import Button from './Button';

const AppWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 100px;
  max-width: 1170px;
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 550px;
    
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <Title />
      <Blobs />
      <section className='flex'>
        <Button side='left' />
        <Carousel />
        <Button side='right' />
      </section>
      <Footer />
    </AppWrapper>
  );
};

export default App;
