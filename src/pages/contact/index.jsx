import { Container, Logo, Title, Text, Item, Image } from "./style.jsx"
import ImageContact from "../../assets/images/image-contact.png"

export const Contact = () => {
    return (
        <Container>
            <Logo src="" alt="Imagem do logo" />

            <Title>  Contato </Title>
            <Text>Gostou de algum dos nossos produtos?<br/> Entre em contato com a gente. Será um prazer te atender!</Text>

            <address>
                <ul>
                    <Item> <a href=""> WhatsApp </a> </Item>
                    <Item> <a href=""> Instagram </a> </Item>
                    <Item> <a href=""> E-mail </a> </Item>
                </ul>
            </address>

            <Image src={ImageContact} alt="Imagem animada da criadora" />
        </Container>

    )
}