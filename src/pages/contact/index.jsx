import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { images } from '../../objects/images';
import { Container, Logo, Title, Text, List, Icon, Image } from "./style.jsx";

export const Contact = () => {
    return (
        <Container>
            <Logo src={images.logoSmall} alt="Imagem do logo" />

            <Title>  Contato </Title>
            <Text>Gostou de algum dos nossos produtos?<br /> Entre em contato com a gente, será um prazer te atender!</Text>

            <address>
                <List>
                    <Icon>
                        <a href="https://wa.me/+5511997127406" target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </Icon>

                    <Icon>
                        <a href="https://instagram.com/lavandinhabordados?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </Icon>

                    <Icon>
                        <a href="mailto:samararhsilva@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </Icon>
                </List>
            </address>

            <Image src={images.avatarContact} alt="Imagem animada da criadora" />
        </Container>
    )
}