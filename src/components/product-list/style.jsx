import { styled } from "styled-components";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 68px;
`

const ContainerList = styled.div `
    text-align: center;
`

const Title = styled.h3`
    color: #756A8B;
    font-family: 'Hatton', Arial;
    text-transform: capitalize;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 20px;
`

const List = styled.ul `
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
`

const Item = styled.li `
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    font-family: 'Hatton', Arial;
    color: #FFFFFF;
    font-weight: 600;
`

const ImageDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    width: 220px;
    height:220px;    
`

const Describe = styled.p `
    font-size: 26px;
`

const Price = styled.p `
    font-size: 23px;
`

const Button = styled.button `
    background: linear-gradient(to bottom, #756A8B, #BEA7C8);
    color: #FFFFFF;
    font-size: 17px;
    font-family: 'Hatton', Arial;
    font-weight: 600;
    border-radius: 10px;
    padding: 5px;
`
export { Container, ContainerList, Title, List, Item, ImageDiv, Describe, Price, Button }