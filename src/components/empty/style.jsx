import { styled } from "styled-components";
import { device } from "../../objects/device";

const Container = styled.div ` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
`

const Text = styled.p `
    color: #756A8B;
    font-family: 'Hatton', Arial;
    font-size: 25px;
    font-weight: 600;

    @media ${device.mobileM} {
        font-size: 22px;
    }
`

const Image = styled.img `
    width: 85px;

    @media ${device.mobileM} {
        width: 70px;
    }
`

export { Container, Text, Image }