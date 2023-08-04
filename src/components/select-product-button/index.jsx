import { useContext, useState } from "react";
import { FilterContext } from "../../context/filter-products";
import { ProductButton, ProductList, Product } from "./style";

export const SelectButton = () => {
    const [ToggleListStatus, setToggleListStatus] = useState(false)

    const { setFilteredProductName } = useContext(FilterContext)

    function toggleFilter(e) {
        const productId = e.target.id

        setFilteredProductName(productId)
        setToggleListStatus(false)
    }

    return (
        <>
            <ProductButton type='button' onClick={() => ToggleListStatus === false ? setToggleListStatus(true) : setToggleListStatus(false)}>
                
                Filtrar por produto
            </ProductButton>

            <ProductList id={ToggleListStatus === true ? "activated" : "disabled"} onClick={toggleFilter}>
                <Product > <button type="button" id="chaveirinhos"> Chaveirinhos </button> </Product>
                <Product > <button type="button" id="bastidores"> Bastidores </button> </Product>
                <Product > <button type="button" id="ecobag"> Ecobag </button> </Product>
                <Product > <button type="button" id="camisetas"> Camisetas </button> </Product>
                <Product > <button type="button" id="quadros"> Quadros </button> </Product>
            </ProductList>
        </>
    )
} 
