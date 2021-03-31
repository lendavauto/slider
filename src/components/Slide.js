import React from 'react';
import styled from 'styled-components';
import emailIcon from '../assets/icons/email.svg';
import userIcon from '../assets/icons/user.svg';
import phoneIcon from '../assets/icons/phone.svg';

const SlideWrapper = styled.article`
  position: absolute;
  margin: 0 auto;
  height: 381px;
  width: 100%;
  max-width: 700px;
  min-width: 270px;
  text-align: center;
  border-radius: 5px;
  z-index: 0;
  @media (min-width: 650px) {
    width: 540px;
  }
  @media (min-width: 950px) {
    width: 811px;
  }
  .exampleSlide {
    h1 {
      font-size: 30px;
      margin-bottom: 5px;
      letter-spacing: 0.3px;
    }
    p {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 35px;
      color: #e12228;
      margin-right: 5px;
    }
  }
  .mainSlide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #222;
    background: #fff;
    border: 1px solid #222;
    border-radius: 5px;
    opacity: 0;
    h2 {
      font-size: 14px;
    }
    .empImg {
      width: 150px;
      height: 150px;
      object-fit: cover;
      margin-bottom: 15px;
      border: 2px solid #222;
      border-radius: 50%;
      -webkit-box-shadow: 2px 3px 5px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 2px 3px 5px 2px rgba(0, 0, 0, 0.5);
    }
    .empInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .empText {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5px;
      overflow: break-word;
    }
    .icon {
      height: 28px;
      width: 28px;
      margin-right: 5px;
    }
  }
`;

const Slide = ({ id, className, image, fName, lName, email, phone }) => {
  const preventDrag = (e) => {
    e.preventDefault();
  };

  switch (id) {
    case '1':
      return (
        <SlideWrapper>
          <div className={className}>
            <img
              src={image}
              alt='employee photo'
              className='empImg'
              onDragStart={preventDrag}
            />
            <div className='empInfo'>
              <h2 className='empText'>
                <img
                  src={userIcon}
                  alt='user icon'
                  className='icon'
                  onDragStart={preventDrag}
                />
                {fName} {lName}
              </h2>
              <h2 className='empText'>
                <img
                  src={emailIcon}
                  alt='email icon'
                  className='icon'
                  onDragStart={preventDrag}
                />
                {email}
              </h2>
              <h2 className='empText'>
                <img
                  src={phoneIcon}
                  alt='phone icon'
                  className='icon'
                  onDragStart={preventDrag}
                />
                {phone}
              </h2>
            </div>
          </div>
        </SlideWrapper>
      );
    case '2':
      return (
        <SlideWrapper>
          <div className={className}>
            <h1>Example Slide</h1>
            <p>Insert custom html</p>
          </div>
        </SlideWrapper>
      );
    default:
      break;
  }
};

export default Slide;
