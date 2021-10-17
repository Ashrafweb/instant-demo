import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const FeatureSectionWrapper = styled.section`
 padding: 40px 0 120px 0;
  @media (max-width: 1440px) {
    padding: 40px 0 80px 0;
  }

  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }
  .feature__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
  
  }
  h2{
    font-family: Nobile;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
  }

  .offer__btn{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ListContainer = styled.ul`
   
 
  width: 325px;
  height: 90px;
  padding-left: 40px ;

   li{
      list-style-type: disc;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      text-align: left;
   }
`


export const ButtonGroup = styled.div`
  margin-top: 75px;
 
  .reusecore__button {
    text-transform: inherit;
    border-radius: 12px;
    padding: 9px 42px;
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
    }
  @media screen and (max-width: 680px) {
    
    height: 30px;
  }  
  
`;

export default FeatureSectionWrapper;
