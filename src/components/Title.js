import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  text-align: center;
  color: #222;
  height: 150px;
  width: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  img {
    margin-top: 15px;
    margin-bottom: 15px;
    height: 75px;
  }
  h1 {
    font-size: 35px;
    margin-bottom: 15px;
    span {
      color: #e12228;
    }
  }
`;

const Title = () => {
  const preventDrag = (e) => {
    e.preventDefault();
  };

  return (
    <TitleWrapper>
      <img
        src='https://junior-webdev-app.000webhostapp.com/images/scandiweb_logo.webp'
        alt='scandiweb logo'
        onDragStart={preventDrag}
      />
      <h1>
        <span>New</span> recruits
      </h1>
    </TitleWrapper>
  );
};

export default Title;
