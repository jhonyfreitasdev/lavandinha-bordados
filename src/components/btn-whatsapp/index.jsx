import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Container, Icon } from './style'
export const ButtonWhats = () => {
    return (
        <Container>
            Não encontrou o que procura? Faça sua encomenda personalizada
            <Icon>
                <a
                    href="https://wa.me/+5511997127406?text=Olá! Eu gostaria de fazer uma encomenda personalizada."
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faWhatsapp} beatFade />
                </a>
            </Icon>
        </Container>
    )
}