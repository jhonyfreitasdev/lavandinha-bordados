import { styled } from "styled-components";

const Container = styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
`

const DivButton = styled.div`
    display: flex;
    align-items: center;
    font-size: 17px;
    border: 1px solid #80808055;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px #00000016;
    padding: 6px;

    button {
        background-color: #00000000;
        font-size: 17px;
        padding: 0 2px;
        cursor: pointer;
    }

    p {
        margin: 0 4px;
    }
`
export { Container, DivButton }