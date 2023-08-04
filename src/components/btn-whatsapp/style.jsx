import { styled } from "styled-components"
import { device } from "../../objects/device"

const Container = styled.div ` 
    background: linear-gradient(to bottom, #756A8B70, #BEA7C8);
    color: #FFFFFF;
    font-family: 'Hatton', Arial;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
    padding: 30px 15px 15px 15px;
    width: 100%;

    @media ${device.mobileL} {
        font-size: 16px;
        padding: 12px;
    }
    @media ${device.mobileM} {
        font-size: 14px;
    }
` 

const Icon = styled.p`
    font-size: 35px;
    margin-top: 10px;
    
    @media ${device.mobileM} {
        font-size: 30px;
    }
    
    a{
        color: #756A8B;
    }
`

export { Container, Icon }