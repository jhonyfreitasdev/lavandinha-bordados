import { Link } from "react-router-dom";
import { HeaderContainer, LogoContainer, Logo, Title, Navigation, List, Item, ProductButton, ProductList, Product } from "./style";
import LogoImage from "../../assets/images/logo.png"

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={LogoImage} alt="Imagem do logo" />
                <Title> 
                    <span >Lavandinha</span> <br/> 
                    bordados 
                </Title>
            </LogoContainer>

            <Navigation>
                <List>
                    <Item> <Link to="/"> Sobre nós </Link> </Item>

                    <Item>
                        <ProductButton type='button'> Produtos </ProductButton>

                        <ProductList>
                            <Product> <Link to="/produtos"> Chaveirinhos </Link> </Product>
                            <Product> <Link to="/produtos"> Bastidores </Link> </Product>
                            <Product> <Link to="/produtos"> Ecobag </Link> </Product>
                            <Product> <Link to="/produtos"> Necessaire </Link> </Product>
                            <Product> <Link to="/produtos"> Quadros </Link> </Product>
                        </ProductList>
                    </Item>

                    <Item> <Link to="/contato"> Contato </Link> </Item>
                </List>
            </Navigation>
        </HeaderContainer>
    )
} 
