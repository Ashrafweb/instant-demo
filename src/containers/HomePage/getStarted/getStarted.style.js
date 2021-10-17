import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const SectionWrapper = styled.section`
  padding: 60px 40px 45px  50px;

  background-color: ${themeGet('colors.primaryLight', '#8FC045')};
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
  margin-top: -70px;
  @media only screen and (max-width: 1219px) {
    margin-top: 0;
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
  h2 {
    color: ${themeGet('colors.white')};
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
line-height: 80px;
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
    color: ${themeGet('colors.white')};
    @media only screen and (max-width: 991px) {
      font-size: 30px;
    }

  }
  p {
    color: ${themeGet('colors.white')};
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
  
.reusecore__button {
    border-radius: 12px;
    font-weight: 500;
    text-transform: inherit;
    min-height: 42px;
    margin: 20px 0px;
    color: '#000000';
    @media only screen and (max-width: 480px) {
      padding:5px;
      font-size: 12px;
    }
  }
  h5{
        
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    margin: 0px;
  }

  h6{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #FFFFFF;
    padding: 5px 0px;
    margin: 0px;
  }

  span{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    @media only screen and (max-width: 480px) {
     
      font-size: 14px;
    }
  }
`;



export default SectionWrapper;
