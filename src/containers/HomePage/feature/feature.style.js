import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 75px 0;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 35px 0;
  }
  .container {
    > header {
      text-transform: capitalize;
      max-width: 500px;
      margin-bottom: 10rem;
      @media only screen and (max-width: 480px) {
        max-width: 280px;
        margin-bottom: 5px;
      }
    }
  }
`;

export const TabArea = styled.div`
  width: 100%;
  margin: 170px 0 70px;
  @media only screen and (max-width: 1366px) {
    margin: 130px 0 50px;
  }
  @media only screen and (max-width: 991px) {
    margin: 0;
  }
  .rq_tab {
    position: relative;
    .tab_menu {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      grid-gap: 70px;
      @media only screen and (max-width: 1300px) {
        grid-gap: 50px;
      }
      @media only screen and (max-width: 667px) {
        grid-template-columns: auto;
        grid-gap: 30px;
      }
      @media only screen and (max-width: 520px) {
        grid-gap: 40px;
      }
      li {
        .feature__block {
          max-width: 360px;
          padding: 20px 30px;
          border-radius: 120px;
          align-items: center;
          border: 2px solid ${themeGet('colors.borderColorLight', '#E8EBF1')};
          transition: border 0.3s ease;
          @media only screen and (max-width: 1220px) {
            max-width: 280px;
            padding: 10px 20px;
          }
          @media only screen and (max-width: 991px) {
            max-width: 100%;
            padding: 20px 25px;
          }
          @media only screen and (max-width: 667px) {
            max-width: 100%;
            padding: 30px 35px;
          }
          @media only screen and (max-width: 480px) {
            max-width: 100%;
            padding: 15px 20px;
          }
          h3 {
            color: ${themeGet('colors.headingColor', '#0F2137')};
            font-size: 18px;
            line-height: 28px;
            font-weight: 500;
            margin: 0 0 3px;
            @media only screen and (max-width: 1300px) {
              font-size: 16px;
              line-height: 25px;
              margin: 0;
            }
            @media only screen and (max-width: 480px) {
              margin-bottom: 5px;
            }
          }
          p {
            margin: 0;
            color: ${themeGet('colors.textColor', 'rgba(52, 61, 72, 0.8)')};
            font-size: 14px;
            line-height: 24px;
          }
          .icon__wrapper {
            position: relative;
            @media only screen and (max-width: 1300px) {
              img {
                height: 60px;
              }
            }
            @media only screen and (max-width: 667px) {
              img {
                height: 70px;
              }
            }
            i {
              opacity: 0;
              visibility: hidden;
              position: absolute;
              color: var(--color);
              transition: all 0.5s cubic-bezier(0.75, -0.5, 0, 1.75);
              &.plus {
                top: 0;
                left: 0;
                transform: translate(20px, 20px) scale(0.1) rotate(-180deg);
              }
              &.circle {
                top: 0;
                right: 0;
                transform: translate(-20px, 20px) scale(0.1) rotate(-180deg);
              }
              &.star {
                bottom: -5px;
                left: calc(50% - 8px);
                transform: translate(0, -20px) scale(0.1) rotate(-180deg);
              }
            }
          }
          .content__wrapper {
            margin-left: 20px;
            @media only screen and (max-width: 1300px) {
              margin-left: 15px;
            }
          }
        }
        &:hover {
          .feature__block {
            border: 2px solid var(--color);
            p {
              font-weight: 400;
            }
          }
        }
        &.active {
          .feature__block {
            border: 2px solid var(--color);
            .icon__wrapper {
              i {
                opacity: 1;
                visibility: visible;
                &.plus {
                  transform: translate(-4px, -4px) scale(1) rotate(180deg);
                }
                &.circle {
                  transform: translate(4px, -4px) scale(1) rotate(180deg);
                }
                &.star {
                  transform: translate(0, 13px) scale(1) rotate(180deg);
                }
              }
            }
            p {
              font-weight: 400;
            }
          }
        }
      }
    }
    .tab_content {
      position: absolute;
      width: 100%;
      top: -60px;
      pointer-events: none;
      @media only screen and (max-width: 1300px) {
        top: -79px;
      }
      @media only screen and (max-width: 991px) {
        top: 0;
        position: inherit;
        display: none;
      }
      .tab_panel {
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        img {
          pointer-events: all;
          @media only screen and (max-width: 1366px) {
            max-width: 90%;
            margin: 0 auto;
          }
          @media only screen and (max-width: 1200px) {
            max-width: 80%;
          }
        }
      }
    }
  }
`;


export const SectionHeader = styled.header`
  max-width: 462px;
  width: 100%;
  margin: 0 auto 58px;
  text-align: center;
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 680px) {
    margin-bottom: 10px;
  }
  h5 {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    color: ${themeGet('colors.primary', '#2563FF')};
    text-transform: uppercase;
    @media only screen and (max-width: 991px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 36px;
    line-height: 36px;
    font-weight: 700;
    color: ${themeGet('colors.headingColor', '#0F2137')};
    margin: 0;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 36px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 23px;
      letter-spacing: -0.7px;
      padding-bottom: 20px;
    }
  }
`;
export default SectionWrapper;
