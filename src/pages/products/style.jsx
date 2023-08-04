import { styled } from "styled-components";
import { device } from "../../objects/device";

export const Container = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 10px 10px 2px #00000026;
    background-color: #D5C3DD;
    margin: 0 auto;
    padding-top: 60px;
    min-height: 69vh;
    max-width: 1440px;

    @media ${device.mobileL} {
        padding-top: 80px;
    }
`