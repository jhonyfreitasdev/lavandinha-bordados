import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const CartButton = styled.div `
    position: absolute;
    right: 8%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    border: 1px solid #80808055;
    border-radius: 15px;
    box-shadow: 0 0 10px 2px #00000016;
    cursor: pointer;
    padding: 6px;
`

const CartIcon = styled(FontAwesomeIcon) ` 
    font-size: 20px;
`

const CounterProducts = styled.p ` 
    display: inline-block;
    border-radius: 50%;
    padding: 2px 6px;
`

const CartList = styled.div `
    background-color: #FFFFFF;
    position: fixed;
    display: none;
    right: 0;
    top: 0;
    z-index: 1;
    border: 1px solid #80808055;
    box-shadow: 0 0 10px 2px #00000016;
    width: 350px;
    min-height: 750px;

    &[id= 'open']{
        display: block;
    }
`

const CloseIcon = styled(FontAwesomeIcon) `
    position: absolute;
    right: 26px;
    top: 18px;
    font-size: 25px;
    cursor: pointer;
`

const DivButton = styled.div `
    display: flex;
`

export { CartButton, CartIcon, CounterProducts, CartList, CloseIcon, DivButton }