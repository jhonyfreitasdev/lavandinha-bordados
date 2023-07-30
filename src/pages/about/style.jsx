import { styled } from "styled-components";
import "../../assets/styles/fonts.css"

const Container = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #D5C3DD;
    box-shadow: 0 10px 10px 2px #00000026;
    margin: 0 auto;
    padding: 100px 0;
    min-height: 69vh;
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