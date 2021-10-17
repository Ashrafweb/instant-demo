import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import GroupImg from 'common/assets/image/HomePage/Group-3604.png'

const BannerWrapper = styled.div`
  padding-top: 100px;
  padding-left: 80px;
  padding-right: 50px;
  min-height: 802px;
  overflow: hidden;
  background-color: ${themeGet('#FFFFFF', 'colors.light',)};
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 120px;
    min-height: fit-content;
    padding-left: 5px;
    padding-right: 5px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      min-height: fit-content;
    }
  }
`;

export const BannerContent = styled.div`
  max-width: 570px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
    max-width: 360px;
  }

  h1 {

    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: 0em;
    text-align: left;
    padding-top: 8rem;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    margin-top: -40px;
    @media only screen and (max-width: 1366px) {
    /* font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left; */

    }
    @media only screen and (max-width: 780px) {
        padding-top: 0rem;
        flex-wrap: wrap;
        font-size: 27px;
        line-height: 40px;
        margin-top: 0px;
    }
  }

  span{
    display: inline;
  }
  .text__border{
    border-bottom : 10px solid ${themeGet('colors.secondary')};
    height: 10px;
    width: 188px;
    margin-top: -20px;
    margin-left: 235px;
    background: ${themeGet('colors.secondary')} ;
    @media only screen and (max-width: 780px) {
      width: 117px;
      margin-left: 155px;
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
    padding-right: 30px;

  }
`;

export const BannerRectImage = styled.div`
    width: 1500px;
    height: 100px;
    background-color: #FFFFFF ;
    margin-top: 235px;

    @media only screen and (max-width: 480px) {
    display: none;
  }
`
  ;
export const BannerImage = styled.div`
    background-image: url(${GroupImg});
    background-repeat: no-repeat;
    background-size:cover;
    flex-shrink: 0;
    align-self: flex-end;
    height: 864px;
    position: absolute;
    right: 0px;
    top: -3px;
    z-index: -1;
    img{
      margin-top: 8px;
    }
  @media only screen and (min-width: 1800px) {
    position: absolute;
    right: 20%;
    top: -3px;
  }

  @media only screen and (max-width: 1199px) {
    background-image: none;
    max-width: 50%;
    position: absolute;
    right: 0px;
    top: 20%;
    img{
      
    }
    @media only screen and (max-width: 680px) {
      display: none;
    }
  }
  
  @media only screen and (max-width: 480px) {
    background-image: none;
    margin-top: 40px;
    position: unset;
    height: auto;
    width: auto;
    max-width: 100%;
    img {
      
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
    
    &.trail{
      border: 2px solid transparent;
      font-weight: 700;
    }
    &.trail:hover{
      background: transparent;
      border: 2px solid #F9EA33;
    }
    &.primary {
      &:hover {
        background-color: ${themeGet('colors.primaryHover', '#3C74FF')};
      }
    }

    &.text {
      .btn-icon {
        svg {
          width: auto;
          height: 25px;
        }
      }
      &:hover {
        color: ${themeGet('colors.primaryHover', '#3C74FF')};
      }
    }
  }
`;

export default BannerWrapper;

