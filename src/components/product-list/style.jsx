import { styled } from "styled-components";
import { device } from "../../objects/device";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 90px;
`

const ContainerList = styled.div `    
    text-align: center;
    width: 90%;

    @media ${device.mobileL} {
        width: 95%;
    }
    @media ${device.mobileM} {
        width: 100%;
        padding: 11px;
    }
`

const Title = styled.h3`
    color: #756A8B;
    font-family: 'Hatton', Arial;
    text-transform: capitalize;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 20px;

    @media ${device.mobileL} {
        font-size: 30px;
    }
    @media ${device.mobileM} {
        font-size: 28px;
    }
`

const List = styled.ul `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 68px 90px;

    @media ${device.mobileL} {
        gap: 68px 10px;
    }

`

const Item = styled.li `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 1;
    gap: 7px;
    font-family: 'Hatton', Arial;
    color: #FFFFFF;
    font-weight: 600;
    width: 260px;

    @media ${device.mobileL} {
        width: 170px;
        gap: 12px 0;
    }
    @media ${device.mobileM} {
        width: 140px;
        gap: 10px;
    }
`

const ImageDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 14px 5px #00000020;
    overflow: hidden;
    width: 220px;
    height:220px;    

    @media ${device.mobileL} {
        width: 150px;
        height:150px;        
    }
    @media ${device.mobileM} {
        width: 135px;
        height: 135px;        
    }
`

const Describe = styled.p `
    font-size: 26px;
    text-align: center;

    @media ${device.mobileL} {
        font-size: 20px;
    }
    @media ${device.mobileM} {
        font-size: 17px;
    }
`

const Price = styled.p `
    font-size: 23px;

    @media ${device.mobileL} {
        font-size: 19px;
    }
    @media ${device.mobileM} {
        font-size: 16px;
    }
`

const Button = styled.button `
    background: linear-gradient(to bottom, #756A8B, #BEA7C8);
    color: #FFFFFF;
    font-size: 17px;
    font-family: 'Hatton', Arial;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;

    @media ${device.mobileM} {
        font-size: 13px;
    }
`

export { Container, ContainerList, Title, List, Item, ImageDiv, Describe, Price, Button }