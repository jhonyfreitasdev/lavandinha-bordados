import { styled } from "styled-components";
import '../../assets/styles/fonts.css'

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #D5C3DD;
    max-width: 1440px;
    margin: 0 auto;
`

const LogoContainer = styled.div`
    position: relative;
    background-color: #FFFFFF;
    text-align: center;
    margin-top: 35px;
    padding: 10px;
`

const Logo = styled.img `
    position: absolute;
    transform: translateY(-50%);
    left: 4%;
    top: 50%;
    width: 160px;
`

const Title = styled.h1 `
    color: #756A8B;
    text-transform: uppercase;
    font-family: 'Hatton', Arial;
    font-size: 37px;
    line-height: 64px;
    margin-top: 15px;

    span {
        font-family: 'Le Jour Scripts', Arial;
        text-transform: capitalize;
        font-size: 45px;
        font-weight: 200;
    }
`

const Navigation = styled.nav `
    display: flex;
    justify-content: center;
    padding: 15px 0 10px 0;
`

const List = styled.ul `
    display: flex;
    gap: 53px;
`

const Item = styled.li `
    position: relative;
    background: linear-gradient(to right, #756A8B, #BEA7C8);
    text-align: center;
    border-radius: 35px;
    box-shadow: 1px 0 25px 2px #00000014;
    width: 200px;
    padding: 9px;

    a {
        color: #FFFFFF;
        font-family: 'Hatton', Arial;
        font-size: 24px;
        font-weight: 600;
    }
`

export { HeaderContainer, LogoContainer, Logo, Title, Navigation, List, Item }