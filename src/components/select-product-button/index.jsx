import { Link } from "react-router-dom";
import { ProductButton, ProductList, Product } from "./style";
import { useState } from "react";

export const SelectButton = () => {
    const [statusProductList, setStatusProductList] = useState(false)

    return (
        <>
            <ProductButton
                type='button'
                onClick={() => statusProductList === false ? setStatusProductList(true) : setStatusProductList(false)}
            >
                Produtos
            </ProductButton>

            <ProductList id={statusProductList === true ? "able" : "disable"} >
                <Product> <Link to="/produtos/chaveirinhos"> Chaveirinhos </Link> </Product>
                <Product> <Link to="/produtos/bastidores"> Bastidores </Link> </Product>
                <Product> <Link to="/produtos/ecobag"> Ecobag </Link> </Product>
                <Product> <Link to="/produtos/necessaire"> Necessaire </Link> </Product>
                <Product> <Link to="/produtos/quadros"> Quadros </Link> </Product>
            </ProductList>
        </>
    )
} 
