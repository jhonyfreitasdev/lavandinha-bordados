import { useContext } from "react";
import { FilterContext } from "../../context/filter-products";
import { products } from "../../objects/products";

export const FilteredList = () => {
    const { filteredProductName } = useContext(FilterContext)

    const filteredProduct = products.find(product => product.name === filteredProductName)

    return (
        <>
            <h3> {filteredProduct.name} </h3>

            <ul>
                {filteredProduct.list.map((product, index) => {
                    return (
                        <li key={index}>
                            <img src={product.image} alt="Imagem do produto" />
                            <p> {product.describe} </p>
                            <p> {product.price} </p>
                            <button type="button" > Adicionar ao carrinho </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}