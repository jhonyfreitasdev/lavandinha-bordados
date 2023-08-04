import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { List, Icon } from './style'

export const Address = () => {
    return (
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
    )
}