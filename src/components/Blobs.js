import React from 'react';
import styled from 'styled-components';
import blobFirst from '../assets/images/vector-dark.svg';
import blobSecond from '../assets/images/vector-red.svg';

const BlobsWrapper = styled.div`
  position: absolute;
  left: 30%;
  width: 850px;
  max-width: 850px;
  transform: scale(0.9);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 1350px) {
    width: 600px;
  }
  @media (max-width: 1050px) {
    left: 10%;
  }
  @media (max-width: 700px) {
    display: none;
  }
  .firstBlob {
    position: absolute;
    @media (max-width: 970px) {
      transform: scale(0.8);
    }
    @media (max-width: 820px) {
      transform: scale(0.7);
      left: 5%;
    }
    @media (max-width: 650px) {
      transform: scale(0.6);
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
  .secondBlob {
    position: absolute;
    left: 13%;
    @media (max-width: 1400px) {
      left: 10%;
    }
    @media (max-width: 800px) {
      transform: scale(0);
    }
    @media (max-width: 650px) {
      transform: scale(0.6);
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const Blobs = () => {
  const preventDrag = (e) => {
    e.preventDefault();
  };
  return (
    <BlobsWrapper>
      <img
        src={blobFirst}
        alt='dark blob'
        className='firstBlob'
        onDragStart={preventDrag}
      />
      <img
        src={blobSecond}
        alt='red blob'
        className='secondBlob'
        onDragStart={preventDrag}
      />
    </BlobsWrapper>
  );
};

export default Blobs;
