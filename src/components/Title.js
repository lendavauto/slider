import React from 'react';
import styled from 'styled-components';

const Title = () => {
    const preventDragging = (e) => {
      e.preventDefault();
    };
  return (
    <TitleWrapper>
      <img
        src='https://junior-webdev-app.000webhostapp.com/images/scandiweb_logo.webp'
        alt='scandiweb logo'
        onDragStart={preventDragging}
      />
      <h2>
        Scandiweb <span>HR</span> Dep<span>art</span>ment
      </h2>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: center;
  color: #222;
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
  h2 {
    margin-bottom: 15px;
    span {
      color: #e12228;
    }
  }
`;

export default Title;
