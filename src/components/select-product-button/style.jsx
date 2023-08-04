import { styled } from "styled-components";
import "../../assets/styles/fonts.css"
import { device } from "../../objects/device";

const ProductButton = styled.button`
    position: absolute;
    left: 6%;
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

    @media ${device.mobileL} {
        left: 2%;
        font-size: 14px;
        width: 130px;
    }
    @media ${device.mobileM} {
        left: 2%;
        font-size: 12px;
        width: 110px;
    }
`

const ProductList = styled.ul`
    background-color: #756A8B70;
    position: absolute;
    left: 7.5%;
    top: 48px;
    border-radius: 5px;
    padding: 5px 15px;
        
    @media ${device.tablet} {
        left: 9.5%;
    }
    @media ${device.mobileL} {
        left: 6%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 6px;
        padding: 8px;
        width: 100px;
    }
    @media ${device.mobileM} {
        left: 5%;
        top: 44px;
        font-size: 14px;
        padding: 5px;
        width: 90px;
    }
`

const Product = styled.li`
    background: linear-gradient(to bottom, #756A8B, #BEA7C8);
    border-radius: 20px;
    box-shadow: 1px 0 25px 2px #00000014;
    margin: 10px 0;
    text-align: center;
    padding: 5px;

    @media ${device.mobileL} {
        margin: 0;
    }
    
    button {
        background-color: #00000000;
        color: #FFFFFFFF;
        font-size: 14px;
        cursor: pointer;

        @media ${device.mobileL} {
            font-size: 13px;
        }        
        @media ${device.mobileM} {
            font-size: 12px;
        }
    }
`

export { ProductButton, ProductList, Product }