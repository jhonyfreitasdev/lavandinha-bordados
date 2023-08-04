import { styled } from "styled-components";
import '../../assets/styles/fonts.css'
import { device } from "../../objects/device";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #D5C3DD;
    box-shadow: 0 10px 10px 2px #00000026;
    max-width: 1440px;
    margin: 0 auto;
`

const LogoContainer = styled.div`
    position: relative;
    background-color: #FFFFFF;
    text-align: center;
    margin-top: 35px;
    padding: 10px;

    @media ${device.mobileL} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 7px 15px;
    }
`

const Logo = styled.img`
    position: absolute;
    transform: translateY(-50%);
    left: 4%;
    top: 50%;
    width: 135px;

    @media ${device.tablet} {
        width: 115px;
        left: 2%;
    }
    @media ${device.mobileL} {
        position: static;
        transform: translateY(0);
    }
    @media ${device.mobileM} {
        width: 95px;
    }
`

const Title = styled.h1`
    color: #756A8B;
    text-transform: uppercase;
    font-family: 'Hatton', Arial;
    font-size: 32px;
    line-height: 46px;
    margin-top: 15px;

    @media ${device.tablet} {
        font-size: 28px;
    }
    @media ${device.mobileM} {
        font-size: 22px;
    }

    span {
        font-family: 'Le Jour Scripts', Arial;
        text-transform: capitalize;
        font-size: 35px;
        font-weight: 200;

        @media ${device.tablet} {
            font-size: 28px;
        }
        @media ${device.mobileM} {
            font-size: 20px;
        }
    }
`

const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    padding-top: 13px;
`

const List = styled.ul`
    display: flex;
    gap: 53px;

    @media ${device.tablet} {
        gap: 35px;
    }
    @media ${device.mobileM} {
        gap: 10px;
    }
`

const Item = styled.li`
    position: relative;
    background: linear-gradient(to right, #756A8B, #BEA7C8);
    text-align: center;
    border-radius: 35px;
    box-shadow: 1px 0 25px 2px #00000014;
    width: 180px;
    padding: 7px;

    @media ${device.tablet} {
        width: 100px;
    }
    @media ${device.mobileM} {
        width: auto;
        padding: 5px 7px;
    }

    a {
        color: #FFFFFF;
        font-family: 'Hatton', Arial;
        font-size: 24px;
        font-weight: 600;

        @media ${device.tablet} {
            font-size: 19px;
        }
        @media ${device.mobileM} {
            font-size: 15px;
        }
    }
`

export { HeaderContainer, LogoContainer, Logo, Title, Navigation, List, Item }