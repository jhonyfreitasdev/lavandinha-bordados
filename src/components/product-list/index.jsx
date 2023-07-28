import { products } from "../../objects/products"

export const ProductList = () => {

    return (
        <>
            {products.map((product, index) => {
                return (
                    <ul key={index}>
                        <h3> {product.name} </h3>

                        {product.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.image} alt="Imagem do produto" />
                                    <p> {item.describe} </p>
                                    <p> {item.price} </p>
                                    <button type="button" > Adicionar ao carrinho </button>
                                </li>
                            )
                        })}
                    </ul>
                )
            })}
        </>
    )
}