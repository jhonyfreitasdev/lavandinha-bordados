import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const CartButton = styled.div`
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

const CartIcon = styled(FontAwesomeIcon)` 
    font-size: 20px;
`

const CounterProducts = styled.p` 
    display: inline-block;
    border-radius: 50%;
    padding: 2px 6px;
`

const CartList = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    display: none;
    right: 0;
    top: 0;
    z-index: 1;
    border: 1px solid #80808055;
    box-shadow: 0 0 10px 2px #00000016;
    width: 370px;
    min-height: 750px;
    padding: 17px;

    &[id= 'open']{
        display: block;
    }
`

const CloseIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 26px;
    top: 18px;
    font-size: 25px;
    cursor: pointer;
`

const Title = styled.h2`
    color: #756A8B;
    font-family: 'Hatton', Arial; 
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
`

const List = styled.ul`
    overflow: auto;
    height: 500px;
    margin-bottom: 20px;
`

const ListItem = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #D5C3DD;
    border-radius: 10px;
    margin: 15px 0;
`

const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    width: 85px;
    height: 85px;    
`

const Describe = styled.p`
    max-width: 90px;
`

const DivButton = styled.div`
    display: flex;
    align-items: center;
    font-size: 17px;
    border: 1px solid #80808055;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px #00000016;
    padding: 6px;
    margin-right: 7px;

    button {
        background-color: #00000000;
        font-size: 17px;
        padding: 0 2px;
        cursor: pointer;
    }

    p {
        margin: 0 4px;
    }
`

const BtnRemoveItem = styled.button `
    position: absolute;
    top: 1px;
    right: 6px;
    background-color: #00000000;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    cursor: pointer;
`

const TotalPrice = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #756A8B;
    font-family: 'Hatton', Arial;
    font-size: 20px;
    font-weight: 600;
    padding: 5px;
`

const BuyButton = styled.button` 
    position: absolute;
    bottom: 5%;
    right: 50%;
    transform: translateX(50%);
    background: linear-gradient(to right, #756A8B, #BEA7C8);
    color: #FFFFFF;
    font-family: 'Hatton', Arial;
    font-size: 20px;
    font-weight: 600;
    border-radius: 30px;
    box-shadow: 1px 0 25px 2px #00000014;
    cursor: pointer;
    padding: 7px 12px;
    width: 200px;
`

export { CartButton, CartIcon, CounterProducts, CartList, CloseIcon, Title, List, ListItem, ImageDiv, Describe, DivButton, BtnRemoveItem, TotalPrice, BuyButton }