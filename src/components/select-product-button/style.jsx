import { styled } from "styled-components";
import "../../assets/styles/fonts.css"

const ProductButton = styled.button `
    background-color: #FFFFFF00;
    color: #FFFFFF;
    font-family: 'Hatton', Arial;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
`

const ProductList = styled.ul `
    display: none;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);

    &[id= 'activated'] {
        display: block;
    }   
`

const Product = styled.li `
    background: linear-gradient(to right, #756A8B, #BEA7C8);
    border-radius: 35px;
    box-shadow: 1px 0 25px 2px #00000014;
    width: 160px;
    margin: 12px 0;
    padding: 9px;

    a {
        font-size: 19px;
    }
`

export { ProductButton, ProductList, Product }