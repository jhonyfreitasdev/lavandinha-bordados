import { Link } from "react-router-dom";
import { HeaderContainer, LogoContainer, Logo, Title, Navigation, List, Item, ProductButton, ProductList, Product } from "./style";
import LogoImage from "../../assets/images/logo.png"
import { useState } from "react";

export const Header = () => {
    const [statusProductList, setStatusProductList] = useState(false)

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
                        <ProductButton
                            type='button'
                            onClick={() => statusProductList === false ? setStatusProductList(true) : setStatusProductList(false)}
                        >
                            Produtos
                        </ProductButton>

                        <ProductList id={statusProductList === true ? "able" : "disable"} >
                            <Product> <Link to="/produtos/chaveirinhos"> Chaveirinhos </Link> </Product>
                            <Product> <Link to="/produtos/bastidores"> Bastidores </Link> </Product>
                            <Product> <Link to="/produtos/ecobag"> Ecobag </Link> </Product>
                            <Product> <Link to="/produtos/necessaire"> Necessaire </Link> </Product>
                            <Product> <Link to="/produtos/quadros"> Quadros </Link> </Product>
                        </ProductList>
                    </Item>

                    <Item> <Link to="/contato"> Contato </Link> </Item>
                </List>
            </Navigation>
        </HeaderContainer>
    )
} 
