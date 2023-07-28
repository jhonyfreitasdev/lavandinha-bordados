import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Container, Logo, Title, Text, List, Icon, Image } from "./style.jsx";
import ImageContact from "../../assets/images/image-contact.png";

export const Contact = () => {
    return (
        <Container>
            <Logo src="" alt="Imagem do logo" />

            <Title>  Contato </Title>
            <Text>Gostou de algum dos nossos produtos?<br /> Entre em contato com a gente, será um prazer te atender!</Text>

            <address>
                <List>
                    <Icon>
                        <a href="#">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </Icon>

                    <Icon>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </Icon>

                    <Icon>
                        <a href="#">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </Icon>
                </List>
            </address>

            <Image src={ImageContact} alt="Imagem animada da criadora" />
        </Container>
    )
}