import styled from 'styled-components'

export const GitWrapper = styled.div`
.active{
    display: none;
}
    width: 100%;
    height: max-content;
    margin-top: 96px;
    border-bottom: 1px solid #bdbdbd;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

     @media(max-width: 1250px) {
    
         width: 100%;
         height: 100%;
         margin-top: 50px;
         border-bottom: 1px solid #bdbdbd;
         display: flex;
         flex-direction: column;
         justify-content: space-evenly;
         align-items: center;
   }
   @media(max-width: 1250px) {
    
    width: 100%;
    height: 100%;
    margin-top: 50px;
    border-bottom: 1px solid #bdbdbd;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
`
    ;

export const GitDescription = styled.div`
  
    width: 50%;
    height: 100%;
    padding: 0 5em;
    background-color: #EFF6EE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  

    @media(max-width: 1250px) {
    width: 100%;
        height: 100%;
        padding: 1.2em 1em;
        background-color: #EFF6EE;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    h2 {
    border-bottom: 8px solid #8FC045;
    height: 44px;
    font-size: 2.5em;
    @media(max-width: 1250px) {
        border-bottom: 8px solid #8FC045;
        font-size: 2em;
    }
    @media(max-width: 480px) {
        height: 33px;
    }
     }
     h4 {
    width: 100%;
    font-size: 1.25em;
    text-align: justify;
    font-weight: 400;

    @media screen  and (max-width: 1250px) {
        width: 100%;
        font-size: 1em;
        text-align: justify;
        font-weight: 400;

    }
}


 `
    ;


export const SocialContainer = styled.div`
    
    width: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 480px) {
        img{
            width: 30px;
            height: 30px;
        }
    }
    
    
    `
export const ImageWrapper = styled.div`

    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
    width: 20%;
    height: auto;
    }
    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const FormContainer = styled.form`

    width: 50%;
    height: 100%;
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; 

    @media screen and (max-width: 1250px) {
      width: 100%;
        height: 100%;
        margin: 1em 0;
        padding: 0 2em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`

export const FormRow = styled.div`

    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 1250px) {

        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`



export const FormRowFirst = styled.div`
 display: flex;

 div{
     max-width:50%;
     margin: 0px 10px;
 }

 @media screen and (max-width: 1250px) {
   flex-wrap: wrap;
   div{
     max-width:100%;
     margin: 0px;
 }
 }
`

export const FieldWrapper = styled.div`

    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;

   label{
    margin: 5px 0;
    font-size: 1.3em;
    font-weight: 500;

    @media screen and (max-width: 1250px) {
       font-size: 1.1em;
        margin-bottom: 0.5em;
    }
   }
   
   span{
       color: #EB5757;

   }
   input , textarea {
    border: 2px solid #bdbdbd;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 1.2em;

    @media screen and (max-width: 1250px) {
        border: 2px solid #bdbdbd;
        padding: 10px 15px;
        font-size: 1.1em;
    }
   }

   textarea{
    height: 200px;

    @media screen and (max-width: 1250px) {
    height: 10em;
    }
   }

   input:focus,textarea:focus{
    border: 2px solid #8FC045;
   }
   @media screen and (max-width: 1250px) {
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
   }
`



export const FormSubmit = styled.input`
    width: 90%;
    text-align: center;
    padding: 15px 20px;
    font-size: 1.2em;
    color:#fff;
    background-color: #8FC045;
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;

    @media screen and (max-width: 1250px) {
        width: 100%;
        text-align: center;
        padding: 15px 20px;
        font-size: 1.2em;
        color:#fff;
        background-color: #8FC045;
        border: 2px solid transparent;
        border-radius: 10px;
        cursor: pointer;
    }

`

