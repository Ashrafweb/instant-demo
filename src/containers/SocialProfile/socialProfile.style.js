import styled from 'styled-components';

export const SocialProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SocialProfileItem = styled.div`
  padding: 0 15px;
  &::last-child{
    margin-right: 0px;
  }
  a {
    color: #fff;
    transition: 0.15s ease-in-out;
    &:hover {
      color: #3444f1;
    }
  }
  @media screen and (max-width: 480px){
    padding: 10px;
  }
  @media screen and (max-width: 380px){
  
    padding: 15px;
  }
`;
