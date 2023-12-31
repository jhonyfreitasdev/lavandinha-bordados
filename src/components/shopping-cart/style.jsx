import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { device } from "../../objects/device";

const CartButton = styled.div`
    position: fixed;
    right: 7%;
    top: 12%;
    z-index: 1;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #80808055;
    border-radius: 15px;
    box-shadow: 0 0 10px 2px #00000016;
    cursor: pointer;
    padding: 6px;

    @media ${device.mobileL} {
        top: 32%;
    }
    @media ${device.mobileM} {
        top: 31%;
        padding: 5px 6px;
    }
`

const CartIcon = styled(FontAwesomeIcon)` 
    font-size: 20px;

    @media ${device.mobileM} {
        font-size: 17px;
    }
`

const CounterProducts = styled.p` 
    display: inline-block;
    border-radius: 50%;
    padding: 2px 6px;

    @media ${device.mobileM} {
        font-size: 14px;
    }
`

const CartList = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
    border: 1px solid #80808055;
    box-shadow: 0 0 10px 2px #00000016;
    width: 370px;
    height: 100vh;
    padding: 17px 17px 35px 17px;
    
    @media ${device.mobileL} {
        width: 100%;
    }
`

const CloseIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 12px;
    right: 21px;
    font-size: 25px;
    cursor: pointer;
`

const Title = styled.h2`
    color: #756A8B;
    font-family: 'Hatton', Arial; 
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    
    @media ${device.mobileM} {
        font-size: 26px;
        margin-top: 10px;
    }
`

const List = styled.ul`
    overflow: auto;
    margin-bottom: 14px;
    height: 460px;
    
    @media ${device.mobileL} {
        height: 570px;
    }
`

const ListItem = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #D5C3DD;
    border-radius: 10px;
    margin: 15px 0;
    padding: 7px;
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

const BtnRemoveItem = styled(FontAwesomeIcon)`
    position: absolute;
    top: -5px;
    right: 0;
    background-color: #756A8B;
    color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    border-radius: 50%;
    cursor: pointer;
    padding: 4px;
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

export { CartButton, CartIcon, CounterProducts, CartList, CloseIcon, Title, List, ListItem, ImageDiv, Describe,BtnRemoveItem, TotalPrice }