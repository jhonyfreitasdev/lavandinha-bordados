import { useParams } from "react-router-dom"
import { products } from "../../objects/products"

export const ProductList = () => {
    const { id } = useParams()
    const productSelected = products.find(product => product.id == id)

    return (

        <ul>
            {productSelected.products.map((product, index) => {
                return (
                    <li key={index}>
                        <img src={product.image} alt="Imagem do produto" />
                        <h3> {product.describe} </h3>
                        <p> {product.price} </p>
                        <button type="button" > Adicionar ao carrinho </button>
                    </li>
                )
            })}
        </ul>
    )
}