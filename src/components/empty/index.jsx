import { images } from "../../objects/images"
import { Container, Text, Image } from "./style"

export const EmptyCart = () => {
    return (
        <Container>
            <Text> Seu carrinho está vazio </Text>
            <Image src={images.emptyCart} alt="Imagem de um carrinho vazio" />
        </Container>
    )
}