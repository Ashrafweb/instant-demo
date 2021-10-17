import styled from 'styled-components';
import Mockup from 'common/assets/image/driverPage/mobileMockUp.png';
import Background from 'common/assets/image/driverPage/streets.png';

const FeatureSliderWrapper = styled.div`
  position: relative;
  padding-top: 200px;
  @media (max-width: 1600px) {
  
  }
  @media (max-width: 1440px) {
    padding-top: 140px;
 
  }
  @media (max-width: 1024px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media (max-width: 990px) {
    padding-top: 50px;
    height: max-content;
  }
  .container {
    max-width: 100% !important;
    padding: 0;
  }
  .FeatureSlider {
    position: relative;
    background-image: url(${Background});
    display: flex;
    height: 125vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 1440px) {
      background-position: bottom;
    }
    @media (max-width: 1024px) {
      background-image: none;
      height: 120vh;
    }
    @media (max-width: 990px) {
      background-position: center;
      height: 120vh;
    }
    @media (max-width: 480px) {
      background-image: none;
      height: 110vh;
    }
    .image-gallery {
      position: relative;
      z-index: 2;
      margin: 0 auto -60px;
    }

    .image-gallery-using-mouse{
      height: 600px;
    }

    .image-gallery-slide-wrapper {
      width: 375px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      height: 570px;
  
      @media (max-width: 990px) {
       width: 100vw;
       height: max-content;
      }

      &::before {
        @media (max-width: 990px) {
        display: none;
      }
        content: '';
        background-image: url(${Mockup});
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: 30px;
      }
    
      .image-gallery-swipe {
        padding: 19px 15px 16px 19px;
        overflow: hidden;
        height: max-content;
        @media (max-width: 990px) {
          padding: 9px 6px 8px 6px;
        }
        .image-gallery-slides {
          height: max-content;
          border-radius: 20px;
          @media (max-width: 990px) {
            border-radius: 40px;
          }
          .image-gallery-slide.center{
                 opacity: 1;
          }
          .image-gallery-slide {
            opacity: 0;
            transition: opacity 450ms ease-out !important;
            .image-gallery-image {
              max-height: calc(100% - 23px);
              @media (max-width: 768px) {
                max-height: calc(100% - 60px);
             }
            }
          }
        }
      }
    }

    .image-gallery-bullets {
      bottom: auto;
      margin: 0;
      position: absolute;
      width: 100%;
      z-index: 4;
      top: auto;
      bottom: -70px;
      left: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      .image-gallery-bullets-container {
        margin-top: 20px;
        margin: 0;
        padding: 0;
        text-align: center;
        display: flex;
        flex-direction: row;
        .image-gallery-bullet {
          padding: 0;
          margin: 0;
          margin-right: 15px;
          transition: all 0.3s ease;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          top: 50%;
          left: 0;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);
          z-index: 1;
          background: #fff;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          &::after {
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background: #f3f2fb;
            -webkit-transition: 0.25s ease-in-out;
            transition: 0.25s ease-in-out;
          }
          &.active {
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
            background: #fff;
            width: 25px;
            height: 25px;
            &::after {
              background-color: #80B431;
              width: 18px;
              height: 18px;
            }
          }
        }
      }
    }
    .image-gallery-thumbnails {
      display: none;
    }
  }
`;
export default FeatureSliderWrapper;
