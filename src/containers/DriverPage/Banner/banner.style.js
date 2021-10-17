import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import GroupImg from 'common/assets/image/driverPage/hero.png'

const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 802px;
  overflow: hidden;
  background-color: ${themeGet('#FFFFFF', 'colors.light',)};
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 120px;
    min-height: fit-content;
  
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
     min-height: calc(100vh - 100px);
    }
    @media only screen and (max-width: 1200px) {
      display: flex;
      min-height: fit-content;
      img{
        max-width: 700px ;
      }
    }
   

    @media only screen and (max-width: 780px) {
      flex-wrap: wrap;
      min-height: fit-content;
      img{
        max-width: 100% ;
      }
    }
  }
`;

export const BannerContent = styled.div`
  max-width: 30vw;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
  }

  @media only screen and (max-width: 780px) {
    flex-shrink: 0;
    max-width: 100%;
  }
  h1 {

    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    padding-top: 3rem;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
  

    }
    @media only screen and (max-width: 780px) {
        padding-top: 3rem;
        flex-wrap: wrap;
        font-size: 28px;
    }

    @media screen and (max-width: 480px){
      padding-top: 1.5rem;
      font-size: 24px;
      line-height: 40px;
    }
  }

  p {
   
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: justified;

  }
`;

// export const BannerRectImage = styled.div`
//     width: 1500px;
//     height: 100px;
//     background-color: #FFFFFF ;
//     margin-top: 235px;

//     @media only screen and (max-width: 480px) {
//     display: none;
//   }
// `
;
export const BannerImage = styled.div`
    max-width: 70vw;
    background-image: url(${GroupImg});
    background-repeat: no-repeat;
    background-size:cover;
    flex-shrink: 0;
    align-self: flex-end;
    height: 864px;
    position: absolute;
    right: -30px;
    top: -160px;
    z-index: -1;
    padding-top: 320px;
    padding-left: 100px;

   
  @media only screen and (min-width: 1800px) {
    position: absolute;
    right: 20%;
    top: -3px;
  }

  @media only screen and (max-width: 1199px) {
    background-image: none;
    max-width: 100%;
    position: absolute;
    right: 0px;
  
   
  }
  
  @media only screen and (max-width: 1028px) {
    background-image: none;
    margin-top: 40px;
    max-width: 100%;
    position: unset;
    padding: 50px 0px;
    margin: 0px;
    height: min-content;
    img {
      width: fit-content;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;
 
  .reusecore__button {
    text-transform: inherit;
    border-radius: 12px;
    width: 210px;
    height: 48px;  
    
    span{
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
    }
   
      &:hover {
        color: ${themeGet('colors.secondaryHover', '#F9EA33')};
      }

    @media screen and (max-width : 480px){
      width: 179px;
      min-height: 40px;
      height: 41px;
      
      span{
          font-size: 11px;
          padding: 0px;
          line-height: 20px;
      }
    }  
  }
  @media screen and (max-width : 480px){
    margin-top: 0px;
   
  }
  
`;

export default BannerWrapper;




