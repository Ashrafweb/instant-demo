import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import bg1 from '../../../common/assets/image/about_us/b1.png';
import bg2 from '../../../common/assets/image/about_us/b2.png';
import bg3 from '../../../common/assets/image/about_us/b3.png';
import bg4 from '../../../common/assets/image/about_us/b4.png';

const SectionWrapper = styled.section`
  width: 100%;
  padding-bottom: 70px;
  position: relative;
  @media only screen and (max-width: 991px) {
    padding-bottom: 60px;
  }
  @media only screen and (max-width: 624px) {
    padding-bottom: 45px;
  }
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80.5%;
    background-color: ${themeGet('#FFFFFF', 'colors.light')};
    content: '';
  }
  .container {
    @media only screen and (min-width: 1367px) {
      max-width: 1500px;
    }
  }
`;
export const ValueMainWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  padding-top: 10px;
  position: relative;
  @media only screen and (max-width: 991px) {
    padding-top: 0px;
    padding-bottom: 15px;
  }
`;

export const ValueWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5px;
  flex-direction: row;
  >div{
    
    width: 50%;
    
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2);
      margin-right: 0;
      padding: 0 10px;
    }
    @media only screen and (max-width: 624px) {
      width: 100%;
      padding: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  } 
  @media only screen and (max-width: 991px) {
    padding: 0;
  }

  .item1{
        background-image: url(${bg1});
        background-repeat: no-repeat;
        background-position-x: center;
        background-size: cover;

  }

  .item2{
        background-image: url(${bg2});
        background-repeat: no-repeat;
        background-position-x: center;
  }
  .item3{
        background-image: url(${bg3});
        background-repeat: no-repeat;
        background-position-x: center;
  }
  .item4{
        background-image: url(${bg4});
        background-repeat: no-repeat;
        background-position-x: center;
  }

  
  .value__item {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0px 50px;
    margin: 0 0 40px;
    @media only screen and (max-width: 1366px) {
      padding: 0px 45px;
    }
    @media only screen and (max-width: 1219px) {
      padding: 0px 15px;
    }
    @media only screen and (max-width: 768px) {
        background: none !important ;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0px 15px;
    }
    @media only screen and (max-width: 624px) {
      padding: 0px 50px;
      width: 100%;
    }
    @media only screen and (max-width: 480px) {
      padding: 0px 20px;
    }
    .icon__wrapper {
      margin-right: 20px;
      flex-shrink: 0;
      @media only screen and (max-width: 768px) {
        margin-bottom: 15px;
        margin-right: 0px;
      }
    }

    h4 {
      margin: -3px 0 18px;
      font-weight: 800;
      font-size: 24px;
      line-height: 30px;
      color: ${themeGet('colors.headingColor', '#0F2137')};
      @media only screen and (max-width: 768px) {
        text-align: center;
        line-height: 1.45;
        margin: 5px 0 15px;
      }
    }
    
    h2 {
    font-size: 36px;
    line-height: 36px;
    font-weight: 700;
    color: ${themeGet('colors.headingColor', '#0F2137')};
    margin: 0;
    letter-spacing: -1px;
    text-transform: capitalize;
    @media only screen and (max-width: 1366px) {
      font-size: 36px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
    p {
      color: ${themeGet('colors.textColor')};
      font-size: 18px;
      line-height: 30px;
      font-weight: 100;
      margin: 0;
      text-align: justify;
      padding:50px 90px ;
      padding-bottom: 70px;
      @media only screen and (max-width: 1366px){
          font-size: 16px;
      }
      @media only screen and (max-width: 780px){
        font-size: 15px;
        padding:10px 20px ;
      }
    }
  }
`;


export default SectionWrapper;
