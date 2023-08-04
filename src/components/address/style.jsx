import { styled } from "styled-components";
import { device } from "../../objects/device";

const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
`

const Icon = styled.li`
    font-size: 35px;
    
    @media ${device.mobileM} {
        font-size: 30px;
    }

    a{
        color: #756A8B;
    }
`

export { List, Icon }