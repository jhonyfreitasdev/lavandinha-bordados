import { styled } from "styled-components";
import "../../assets/styles/fonts.css"

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
    background-color: #D5C3DD;
    font-family: 'Hatton';
    box-shadow: 0 10px 10px 2px #00000026;
    margin: 0 auto;
    padding: 55px 0;
    min-height: 69vh;
    max-width: 1440px;
`

const Logo = styled.img`
    width: 65px;
`

const Title = styled.h2`
    color: #756A8B;
    font-size: 35px;
    font-weight: 600;
`

const Text = styled.p`
    color: #FFFFFF;
    font-size: 23px;
    font-weight: 600;
    text-align: center;
    width: 40%;
`

const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
`

const Icon = styled.li`
    font-size: 35px;
    a{
        color: #756A8B;
    }
`

const Image = styled.img`
    position: absolute;
    top: 17%;
    right: 30px;
    width: 280px;
`
export { Container, Logo, Title, Text, List, Icon, Image }