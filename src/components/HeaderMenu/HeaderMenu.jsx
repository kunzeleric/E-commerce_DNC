import "./index.scss";
import Logo from "../../assets/dnc-logo.png";
import Cart from "../../assets/cart-icon.png";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <img src={Logo} alt="Logo da DNC" className="header-menu__logo"/>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      <div className="header-menu__cart-shop">
        <h2>Meu Carrinho</h2>
        <img src={Cart} alt="Carrinho de compras" />
      </div>
    </header>
  );
};

export default HeaderMenu;
