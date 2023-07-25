import { styled } from "styled-components";
import "../../assets/styles/fonts.css"

const Container = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #D5C3DD;
    font-family: 'Hatton';
    margin: 0 auto;
    padding: 45px 0;
    height: 98vh;
    max-width: 1440px;
`

const Logo = styled.img `

`

const Title = styled.h2 `
    color: #756A8B;
    font-size: 35px;
    font-weight: 600;
`

const Text = styled.p `
    color: #FFFFFF;
    font-size: 23px;
    font-weight: 600;
    text-align: center;
    width: 40%;
`

const Item = styled.li `
    background: linear-gradient(to right, #756A8B, #BEA7C8);
    text-align: center;
    border-radius: 35px;
    box-shadow: 1px 0 25px 2px #00000014;
    width: 170px;
    padding: 9px;
    margin: 12px 0;
    
    a {
        color: #FFFFFF;
        font-size: 22px;
        font-weight: 600;
    }
`

const Image = styled.img `
    position: absolute;
    top: 23%;
    right: 30px;
`
export { Container, Logo, Title, Text, Item, Image }