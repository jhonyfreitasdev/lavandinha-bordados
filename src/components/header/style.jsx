import { styled } from "styled-components";
import '../../assets/styles/fonts.css'

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #BEA7C8;
    width: 1440px;
    margin: 0 auto;
`

const LogoContainer = styled.div`
    background-color: #FFFFFF;
    text-align: center;
    margin-top: 45px;
    padding: 17px;
`

const Title = styled.h1 `
    color: #756A8B;
    text-transform: uppercase;
    font-family: 'Hatton';
    font-size: 43px;
    line-height: 64px;

    span {
        font-family: 'Le Jour Scripts';
        text-transform: capitalize;
        font-size: 50px;
        font-weight: 200;
    }
`

export { HeaderContainer, LogoContainer, Title }