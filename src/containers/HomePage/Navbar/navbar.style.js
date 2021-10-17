import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 25px 0 26px;
  border-bottom: 0px solid rgba(0, 0, 0, 0.05);
  background-color: ${themeGet('#000000', 'colors.light')};
  position: fixed;
  z-index: 9999;
  transition: all 0.3s ease;  
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  @media only screen and (max-width: 1366px) {
    padding: 20px 0 21px;
  }
  > div.container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
      
        height: 74.27882385253906px;
        width:  284.27252197265625px;
        left: 70px;
        top: 23.76220703125px;
        border-radius: 0px;
        
        @media screen and (max-width :768px ){
          height: 52.27882385253906px;
          width: 195.27252197265625px;
        }
      }
    }
  }
  ul {
    li {
      a {
        color: ${themeGet('colors.menu', '#0D233E')};
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
      }
    
      }
  }
`;
export const NavbarComponent = styled.nav`
   display: flex;
   align-items: center;
   min-height: 56px;
   padding: 10px 16px;

`
export const MenuArea = styled.div`
  display: flex;
  align-items: center;
  .menu {
    display: flex;
    align-items: center;
    margin-right: 11px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    @media only screen and (max-width: 1366px) {
      margin-right: 13px;
    }
    @media only screen and (max-width: 991px) {
      display: none;
    }

    li.git__btn {
      padding : 0px;
      height: 60px;

    }
    li {
      margin: 0 19px;
      @media only screen and (max-width: 1366px) {
        margin: 0 17px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    a{
        color: ${themeGet('colors.menu', '#0D233E')};
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }

   
  
      
  }
  &.active {
    .menu {
      opacity: 0;
      visibility: hidden;
    }
   
  }
  .reusecore__button {
    border-radius: 12px;
    font-weight: 500;
    text-transform: inherit;
    padding-left: 13px;
    padding-right: 13px;
    min-height: 42px;
    border: 2px solid transparent;
    
    &.text {
      padding: 0;
      margin-right: 28px;
      .btn-icon {
        svg {
          width: 22px;
          height: auto;
          stroke: ${themeGet('colors.menu', '0D233E')};
          z-index: 100;
          @media only screen and (max-width: 991px) {
            width: 24px;
          }
        }
      }
      @media only screen and (max-width: 1366px) {
        margin-right: 20px;
      }
      @media only screen and (max-width: 991px) {
        margin-right: 0;
      }
    }
   
    &.trail {
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
    &.menubar {
      display: none;
      @media only screen and (max-width: 991px) {
        display: inline-flex;
        padding: 0;
        justify-content: flex-end;
        min-width: 35px;
        svg {
          width: 27px;
          height: auto;
        }
      }
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;
;
  @media only screen and (max-width: 991px) {
    display: flex;
    width: 100%;
    height:100vh;
    padding: 27px 0 40px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0px;
    flex-direction: column;
    background-color: ${themeGet('colors.white', '#ffffff')};
    transition: all 0.3s ease;
    &.active {
      opacity: 1;
      visibility: visible;
    }
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    ul {
      padding-bottom: 20px;
      li {
        a {
          display: block;
          padding: 13px 0;
          border-radius: 5px;
          transition: all 0.3s ease;
          color: #000;
        }
       
      }
    }
    .reusecore__button {
      width: 100%;
      @media only screen and (max-width: 480px) {
        margin-top: 20px;
      }
    }
  }
`;

export const MenuList = styled.ul`
list-style-type: none;
position: absolute;
top: 0px;
float: right;
`

export const Link = styled.a``;
export default NavbarWrapper;
