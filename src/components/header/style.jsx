import { styled } from "styled-components";
import '../../assets/styles/fonts.css'

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #BEA7C8;
    max-width: 1440px;
    margin: 0 auto;
`

const LogoContainer = styled.div`
    position: relative;
    background-color: #FFFFFF;
    text-align: center;
    margin-top: 45px;
    padding: 10px;
`

const Logo = styled.img `
    position: absolute;
    left: 4%;
    top: 50%;
    transform: translateY(-50%);
`

const Title = styled.h1 `
    color: #756A8B;
    text-transform: uppercase;
    font-family: 'Hatton', Arial;
    font-size: 43px;
    line-height: 64px;
    margin-top: 15px;

    span {
        font-family: 'Le Jour Scripts', Arial;
        text-transform: capitalize;
        font-size: 50px;
        font-weight: 200;
    }
`

const Navigation = styled.nav `
    display: flex;
    justify-content: center;
    padding: 17px;
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
    box-shadow: 1px 0 25px 2px #00000025;
    width: 215px;
    padding: 10px;

    a {
        color: #FFFFFF;
        font-family: 'Hatton', Arial;
        font-size: 30px;
        font-weight: 600;
    }
`

const ProductButton = styled.button `
    background-color: #FFFFFF00;
    color: #FFFFFF;
    font-family: 'Hatton', Arial;
    font-size: 30px;
    font-weight: 600;
`

const ProductList = styled.ul `
    position: absolute;
    bottom: 500px;
`

const Product = styled.li `
    
`
export { HeaderContainer, LogoContainer, Logo, Title, Navigation, List, Item, ProductButton, ProductList, Product }