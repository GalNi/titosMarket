import { Link } from "react-router-dom";
import logoTitosMarket from "./logo-white.svg"

function Header(){
    return(
        <header className="header">
            <div className="header-titos-market">
                <img src={logoTitosMarket} alt="Logo TitosMarket"/>
                <nav className="menu">
                    <Link to="/" className="item-menu">Frente de caixa</Link>
                    <Link to="/gestao-produtos" className="item-menu">Gestão de produtos</Link>
                    <Link to="#" className="item-menu">Gestão de estoque</Link>
                </nav>
                <div className="operador">
                    <h3>Operador <br /><span>Fulano</span></h3>
                </div>
            </div>
        </header>
    )
}
export default Header;
