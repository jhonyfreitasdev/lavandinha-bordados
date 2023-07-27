import { Link } from "react-router-dom";
import { SelectButton } from "../select-product-button";
import { HeaderContainer, LogoContainer, Logo, Title, Navigation, List, Item } from "./style";
import LogoImage from "../../assets/images/logo.png"

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={LogoImage} alt="Imagem do logo" />
                <Title>
                    <span >Lavandinha</span> <br />
                    bordados
                </Title>
            </LogoContainer>

            <Navigation>
                <List>
                    <Item> <Link to="/"> Sobre nós </Link> </Item>

                    <Item>
                        <SelectButton />
                    </Item>

                    <Item> <Link to="/contato"> Contato </Link> </Item>
                </List>
            </Navigation>
        </HeaderContainer>
    )
} 
