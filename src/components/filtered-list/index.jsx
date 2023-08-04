import { useContext } from "react";
import { FilterContext } from "../../context/filter-products";
import { products } from "../../objects/products";
import { Title, List, Item, ImageDiv, Describe, Price, Button } from "../product-list/style";
import { Container } from "./style"
import { CartContext } from "../../context/cart";


export const FilteredList = () => {
    const { filteredProductName } = useContext(FilterContext)
    const { cartList, setCartList} = useContext(CartContext)

    const filteredProduct = products.find(product => product.name === filteredProductName)
    const formattedPrice = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    const addProductToCart = (item) => {
        const existingItem = cartList.find(product => product.id === item.id);

        if (existingItem) {
            const updatedCartList = cartList.map(product => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + 1, totalPrice: (product.quantity + 1) * product.price };
                } else {
                    return product;
                }
            });

            setCartList(updatedCartList);
        } else {
            setCartList([...cartList, { ...item, quantity: 1, totalPrice: item.price }]);
        }
    };

    return (
        <Container>

            <Title> {filteredProduct.name} </Title>

            <List>
                {filteredProduct.list.map((product, index) => {
                    return (
                        <Item key={index}>
                            <ImageDiv>
                                <img src={product.image} alt="Imagem do produto" />
                            </ImageDiv>

                            <Describe> {product.describe} </Describe>
                            <Price> {formattedPrice(product.price)} </Price>

                            <Button type="button" onClick={() => addProductToCart(product)}>
                                Adicionar ao carrinho 
                            </Button>
                        </Item>
                    )
                })}
            </List>
        </Container>
    )
}