import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 100px 0 120px;
  @media only screen and (max-width: 1440px) {
    padding: 170px 0 90px;
  }
  @media only screen and (max-width: 480px) {
    padding: 50px 0 60px;
  }
`;

export const ContentWrapper = styled.div`
  /* column-count: 2;
  column-gap: 80px; */
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    margin-top: -30px;
  }

  .react-reveal {
    /* border-bottom: 2px solid ${themeGet('colors.textPrimary')}; */
    flex: 0 0 calc(50% - 40px);
    margin-top: 40px;
    &:nth-child(odd) {
      margin-right: 80px;
    }
    @media only screen and (max-width: 768px) {
      flex: 0 0 calc(50% - 25px);
      &:nth-child(odd) {
        margin-right: 50px;
      }
    }
    @media only screen and (max-width: 767px) {
      flex: 0 0 100%;
    }
  }
`;

export const FaqItem = styled.div`
 h2{
  font-family: DM Serif Display;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: 66px;
letter-spacing: 0em;
text-align: center;
width: 100%;
padding : 0px 50px;

@media screen and (max-width : 480px){
 font-size: 26px;
}
 }
  h4 {
    font-weight: 700;
    font-size: 28px;
    line-height: 30px;
    letter-spacing: -0.5px;
    color: ${themeGet('colors.textPrimary')};

   @media screen and (max-width : 480px){
    font-size: 24px;
    }
  }
  p {
    font-size: 15px;
    line-height: 32px;
    color: ${themeGet('colors.text')};
  }
`;

export default SectionWrapper;
