import { useContext } from "react";
import { FilterContext } from "../../context/filter-products";
import { products } from "../../objects/products";
import { Title, List, Item, ImageDiv, Describe, Price, Button } from "../product-list/style";
import { Container } from "./style"


export const FilteredList = () => {
    const { filteredProductName } = useContext(FilterContext)

    const filteredProduct = products.find(product => product.name === filteredProductName)

    const formattedPrice = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

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
                            <Button type="button" > Adicionar ao carrinho </Button>
                        </Item>
                    )
                })}
            </List>
        </Container>
    )
}