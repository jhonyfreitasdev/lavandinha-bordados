import { styled } from "styled-components";
import "../../assets/styles/fonts.css"

const ProductButton = styled.button `
    position: absolute;
    right: 2%;
    top: 13px;
    background: linear-gradient(to bottom, #756A8B, #BEA7C8);
    color: #FFFFFF;
    font-family: 'Hatton', Arial;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 20px;
    padding: 5px;
    width: 170px;
`

const ProductList = styled.ul `
    background-color: #756A8B55;
    display: none;
    position: absolute;
    right: 3.5%;
    top: 48px;
    border-radius: 5px;
    padding: 5px 15px;

    &[id= 'activated'] {
        display: block;
    }   
`

const Product = styled.li `
    background: linear-gradient(to bottom, #756A8B, #BEA7C8);
    border-radius: 20px;
    box-shadow: 1px 0 25px 2px #00000014;
    margin: 10px 0;
    text-align: center;
    padding: 5px;
    
    button {
        background-color: #00000000;
        color: #FFFFFFFF;
        font-size: 14px;
        cursor: pointer;
    }
`

export { ProductButton, ProductList, Product }