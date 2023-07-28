import { Link } from "react-router-dom";
import { useContext } from "react";
import { FilterContext } from "../../context/filter-products";
import LogoImage from "../../assets/images/logo.png"
import { HeaderContainer, LogoContainer, Logo, Title, Navigation, List, Item } from "./style";

export const Header = () => {
    const { setFilteredProductName } = useContext(FilterContext)

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

                    <Item> <Link to="/produtos" onClick={() => setFilteredProductName('')}> Produtos </Link> </Item>

                    <Item> <Link to="/contato"> Contato </Link> </Item>
                </List>
            </Navigation>
        </HeaderContainer>
    )
} 
