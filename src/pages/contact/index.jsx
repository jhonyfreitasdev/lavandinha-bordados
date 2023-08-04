import { Address } from '../../components/address';
import { images } from '../../objects/images';
import { Container, Logo, Title, Text, Image } from "./style.jsx";

export const Contact = () => {
    return (
        <Container>
            <Logo src={images.logoSmall} alt="Imagem do logo" />

            <Title>  Contato </Title>
            <Text>Gostou de algum dos nossos produtos?<br /> Entre em contato com a gente, será um prazer te atender!</Text>

            <Address />

            <Image src={images.avatarContact} alt="Imagem animada da criadora" />
        </Container>
    )
}