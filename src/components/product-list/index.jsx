import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { products } from "../../objects/products";
import { Container, ContainerList, Title, List, Item, ImageDiv, Describe, Price, Button, ButtonWhatsApp } from "./style";

export const ProductList = () => {
    const { cartList, setCartList } = useContext(CartContext)

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
            {products.map((product, index) => {
                return (
                    <ContainerList key={index}>
                        <Title> {product.name} </Title>

                        <List>

                            {product.list.map((item, index) => {
                                return (
                                    <Item key={index}>
                                        <ImageDiv>
                                            <img src={item.image} alt="Imagem do produto" />
                                        </ImageDiv>
                                        <Describe> {item.describe} </Describe>
                                        <Price> {formattedPrice(item.price)} </Price>
                                        <Button type="button" onClick={() => addProductToCart(item)} > Adicionar ao carrinho </Button>
                                    </Item>
                                )
                            })}
                        </List>
                    </ContainerList>
                )
            })}

            <ButtonWhatsApp href="https://wa.me/11997127406?text=Olá! Eu gostaria de fazer uma encomenda personalizada." target="_blank">
                Não encontrou o que procura? Faça sua encomenda personalizada
            </ButtonWhatsApp>
        </Container>
    )
}