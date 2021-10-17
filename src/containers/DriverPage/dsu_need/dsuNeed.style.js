import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.div`
  padding: 75px 0;
  margin-top: 200px;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
    margin-top: 00px;
  }
  > div.container {
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 667px ){
      .image{
        display: none;
      }
    }
  }
 
`;



export const TextWrapper = styled.div`
  width: auto;
  align-self: center;
  @media only screen and (max-width: 1366px) {
    padding-left: 90px;
  }
  @media only screen and (max-width: 991px) {
    width: 350px;
    padding-left: 30px;
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
    padding-left: 0;
    margin-top: 40px;
  }
  h2 {
    color: ${themeGet('colors.headingColor', '#0F2137')};
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 51px;
    margin-left: 20px;
    margin-bottom: 30px;
    @media only screen and (max-width: 1366px) {
      font-size: 40px;
      line-height: 42px;
     
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      display: flex;
      justify-content: center;
      margin-left: 0px;
    }
  }
  p {
    color: ${themeGet('colors.textColor', 'rgba(52, 61, 72, 0.8)')};
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 0;
  }
  > p {
    margin-bottom: 40px;
  }
  .feature__block {
    margin-top: 45px;
    align-items: center;
    h3 {
      color: ${themeGet('colors.headingColor', '#0F2137')};
      font-size: 20px;
      line-height: 28px;
      font-weight: 700;
      margin-bottom: 0px;
      @media only screen and (max-width: 1366px) {
        line-height: 26px;
        margin-bottom: 0px;
      }

      @media only screen and (max-width: 680px) {
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
      }


    }
    i {
      color: ${themeGet('colors.primary', '#2563FF')};
      font-size: 24px;
      margin-right: 22px;
    }
    @media only screen and (max-width: 680px) {
       margin-top: 20px;
      }

  }

  .icon__wrapper{
       padding-right: 30px;
       min-width: 85px;
       text-align: center;

    @media screen and (max-width:480px){
      min-width: 67px;
      padding-right: 10px;

      img{
        width: 70%;
    
        &:last-child{
          width: 50%;
        }
      }

    
    }   
  }
`;


export default SectionWrapper;
