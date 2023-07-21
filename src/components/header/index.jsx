import { Link } from "react-router-dom";
import { HeaderContainer, LogoContainer, Title } from "./style";

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img className="logo" src="" alt="" />
                <Title> 
                    <span >Lavandinha</span> <br/> 
                    bordados 
                </Title>
            </LogoContainer>

            <nav>
                <ul>
                    <li> <Link to="/sobre"> Sobre nós </Link> </li>

                    <li>
                        <button type='button'> Produtos </button>

                        <ul>
                            <li> <Link to="/produtos"> Chaveirinhos </Link> </li>
                            <li> <Link to="/produtos"> Bastidores </Link> </li>
                            <li> <Link to="/produtos"> Ecobag </Link> </li>
                            <li> <Link to="/produtos"> Necessaire </Link> </li>
                            <li> <Link to="/produtos"> Quadros </Link> </li>
                        </ul>
                    </li>

                    <li> <Link to="/contato"> Contato </Link> </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
} 
