import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 60px 0 45px;
 
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
    @media only screen and (min-width: 1367px) {
      max-width: 1290px;
    }
  }
`;

export const ThumbWrapper = styled.div`
  width: calc(100% - 600px);
  display: flex;
  justify-content: flex-end;
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
  width: 550px;
  margin-top: 50px;
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
  }
  h1{
      width: fit-content;
      font-size: 5rem;
      color:  ${themeGet('colors.black')};
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      margin-bottom: 0.4rem;
      border-bottom: 10px solid  ${themeGet('colors.secondary')};;
      height: 80px;
      @media only screen and (max-width: 991px) {
      font-size: 36px;
      margin-left: 10px;
      margin-bottom: 0.2rem;
      width: fit-content;
      height: 38px;
    }
  }
  h2 {
    color: ${themeGet('colors.black')};
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 60px;
    width: 600px;
    margin-top: 40px;
    margin-left: 50px;
    @media only screen and (max-width: 1219px) {
      font-size: 44px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 32px;
      line-height: 40px;
      margin-top: 20px;
      margin-left: 10px;
      width: 100%;
    }
  }

  span{
    color: ${themeGet('colors.secondary')};
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 40px;
    @media only screen and (max-width: 1219px) {
      font-size: 44px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 32px;
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
    padding-right: 20px;
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
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    padding: 5px 0px;
    margin-left: 50px;
    text-align: justify;
    @media only screen and (max-width: 991px) {
      font-size: 16px;
      margin-left: 10px;
    }
    @media only screen and (max-width: 680px) {
      font-size: 16px;
      margin-left: 10px;
      text-align: justify;
    }
  }
 
`;



export default SectionWrapper;
