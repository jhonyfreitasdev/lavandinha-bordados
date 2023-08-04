import { styled } from "styled-components";
import { device } from "../../objects/device";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 40px 10px;

    @media ${device.mobileL} {
        padding: 20px 12px 30px 12px;
    }
`