import { styled } from "styled-components";
import "../../assets/styles/fonts.css"
import { device } from "../../objects/device";

const Container = styled.div` 
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #D5C3DD;
    box-shadow: 0 10px 10px 2px #00000026;
    margin: 0 auto;
    padding: 100px 0;
    min-height: 78vh;
    max-width: 1440px;

    @media ${device.mobileL} {
        padding: 50px 0;
    }
`

const Content = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 15px;

    @media ${device.tablet} {
        width: 100%;
        flex-direction: column;
    }
`

const Image = styled.img`  
    width: 30%;
    @media ${device.tablet} {
        width: 45%;
    }
    @media ${device.mobileL} {
        width: 55%;
    }
`

const Text = styled.p`  
    color: #FFFFFF;
    font-family: 'Hatton', Arial;
    font-size: 24px;
    font-weight: 600;
    text-align: justify;
    text-shadow: 0 0 5px #00000040;
    width: 60%;

    @media ${device.mobileL} {
        width: 85%;
        font-size: 20px;
    }
`
export { Container, Content, Image, Text }