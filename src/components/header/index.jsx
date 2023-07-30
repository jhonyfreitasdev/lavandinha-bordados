import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../../context/filter-products";
import { ShoppingCart } from "../shopping-cart";
import { HeaderContainer, LogoContainer, Logo, Title, Navigation, List, Item } from "./style";
import { images } from "../../objects/images";

export const Header = () => {
    const { setFilteredProductName } = useContext(FilterContext)

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={images.logo} alt="Imagem do logo" />

                <Title>
                    <span >Lavandinha</span> <br />
                    bordados
                </Title>

                <ShoppingCart />
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
