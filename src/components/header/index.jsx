import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="container-logo">
                <img className="logo" src="" alt="" />
                <h1> <span className="destaque">Lavandinha</span> bordados </h1>
            </div>

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
        </header>
    )
} 
