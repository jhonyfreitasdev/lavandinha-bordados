import { images } from "../../objects/images";
import { Container, Content, Image, Text } from "./style";

export const About = () => {
    return (
        <Container>
            <Content>
                <Image src={images.avatarAbout} alt="Imagem animada da Criadora" />

                <Text>A Lavandinha Bordados surgiu de um pequeno sonho que vem se tornando realidade. E afim de trazer esse carinho e delicadeza para nossos produtos, eles são todos personalizados e bordados à mão.</Text>
            </Content>
        </Container>
    )
}