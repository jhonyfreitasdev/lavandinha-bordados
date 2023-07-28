import { products } from "../../objects/products";
import { Container, ContainerList, Title, List, Item, ImageDiv, Describe, Price, Button } from "./style";

export const ProductList = () => {

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
                                        <Price> {item.price} </Price>
                                        <Button type="button" > Adicionar ao carrinho </Button>
                                    </Item>
                                )
                            })}
                        </List>
                    </ContainerList>
                )
            })}
        </Container>
    )
}