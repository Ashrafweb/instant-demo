import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import bg from "../../../common/assets/image/about_us/about_bg.png"
const SectionWrapper = styled.section`
  padding: 60px 0 45px;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 991px) {
    padding: 85px 0 90px;
  }
  @media only screen and (max-width: 624px) {
    padding: 72px 0 75px;
  }
  > div.container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;
    @media only screen and (min-width: 1367px) {
      max-width: 1290px;
    }
  }
`;

export const ThumbWrapper = styled.div`
  width: calc(100% - 600px);
  display: flex;
  justify-content: flex-end;
  padding-right: 80px;
  @media only screen and (max-width: 991px) {
    width: calc(100% - 380px);
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  img {
    position: relative;
    right: -25px;
  }
`;

export const TextWrapper = styled.div`
 
  padding-left: 90px;
  margin-top: 50px;
  width: 600px;
  @media only screen and (max-width: 1219px) {

  }
  @media only screen and (max-width: 991px) {
    width: 380px;
  }
  @media only screen and (max-width: 768px) {
    width: 550px;
  }
  @media only screen and (max-width: 624px) {
    width: 100%;
    padding-left: 0px;
    margin-top: 10px;
  }
  h1{
      color:  ${themeGet('colors.black')};
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 42px;
      line-height: 51px;
      margin-bottom: 0.4rem;
      z-index:100;
      @media only screen and (max-width: 991px) {
      font-size: 36px;
      width: fit-content;
      height: 38px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 36px;
      line-height: 40px;
      font-weight: 600;
    }
  }

  .text__border__bottom{
    height: 10px;
    width: 132px;
    margin-top: -23px;
    z-index: 1 !important;
    background: ${themeGet('colors.secondary')} ;
    @media only screen and (max-width: 780px) {
      width: 117px;
      margin-top: -20px;
    }
  }


  h2 {
    color: ${themeGet('colors.black')};
    font-family: Epilogue;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 56px;
    margin-top: 40px;
    text-transform: capitalize;
    @media only screen and (max-width: 1219px) {
      font-size: 44px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 32px;
      line-height: 40px;
      margin-top: 20px;
      width: 100%;
    }
  }

  span{
    color: ${themeGet('colors.secondary')};
    font-family: Epilogue;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 56px;
    @media only screen and (max-width: 1219px) {
      font-size: 44px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 32px;
      line-height: 36px;
    }
  }

  h4{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: ${themeGet('colors.black')};

  }
  p {
    color: ${themeGet('colors.black')};
    font-size: 17px;
    line-height: 2;
    margin-bottom: 0;
    width: 550px;
    @media only screen and (max-width: 991px) {
      font-size: 16px;
      line-height: 1.8;
    }
    @media only screen and (max-width: 480px) {
      padding-right: 0;
    }
  }
  
  h6{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    text-align: justify;
    width: 550px;
    @media only screen and (max-width: 991px) {
      font-size: 16px;
      width: 300px;
    }
    @media only screen and (max-width: 680px) {
      font-size: 16px;
      width: 100%;
      text-align: justify;
    }
  }
 
`;



export default SectionWrapper;
