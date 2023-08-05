import { styled } from "styled-components";
import { device } from "../../objects/device";

export const Button = styled.a` 
    position: absolute;
    top: 90%;
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

    @media ${device.mobileL} {
        top: 690px;
    }
    @media ${device.mobileM} {
        font-size: 17px;
        width: 170px;
        padding: 5px;
    }
`