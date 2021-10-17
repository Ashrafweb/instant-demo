import styled from "styled-components";

export const SideNavWrapper = styled.div`

 @media screen and (max-width : 1250px){
        display: block;
        position: absolute;
        width: 100%;
        height: auto;
        top: 10%;
 }

 @media screen and (max-width : 991px){
     display: none;
 }

`
export const NavLine = styled.img`
        position: absolute;
        top: 10%;
        /* width: 3%; */
        left:1%;
        /* height: 5000px; */


`

export const NavVan = styled.img`
        position: fixed;
        top: 30%;
        left: 0.5%;

`