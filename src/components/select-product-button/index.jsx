import { Link } from "react-router-dom";
import { ProductButton, ProductList, Product } from "./style";
import { useState } from "react";

export const SelectButton = () => {
    const [ToggleList, setToggleList] = useState(false)

    return (
        <>
            <ProductButton
                type='button'
                onClick={() => ToggleList === false ? setToggleList(true) : setToggleList(false)}
            >
                Produtos
            </ProductButton>

            <ProductList 
                id={ToggleList === true ? "activated" : "disabled"} 
                onClick={() => setToggleList(false)}
            >
                <Product> <Link to="/produtos/chaveirinhos"> Chaveirinhos </Link> </Product>
                <Product> <Link to="/produtos/bastidores"> Bastidores </Link> </Product>
                <Product> <Link to="/produtos/ecobag"> Ecobag </Link> </Product>
                <Product> <Link to="/produtos/necessaire"> Necessaire </Link> </Product>
                <Product> <Link to="/produtos/quadros"> Quadros </Link> </Product>
            </ProductList>
        </>
    )
} 
