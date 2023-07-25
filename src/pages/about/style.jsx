import { styled } from "styled-components";

const Container = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #D5C3DD;
    margin: 0 auto;
    padding: 50px 0;
    height: 98vh;
    max-width: 1440px;
`

const Content = styled.div `  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
` 

const Image = styled.img `  
    width: 30%;
` 

const Text = styled.p `  
    color: #FFFFFF;
    font-family: 'Hatton', Arial;
    font-size: 24px;
    font-weight: 600;
    text-shadow: 0 0 5px #00000040;
    width: 60%;
` 
export { Container, Content, Image, Text }