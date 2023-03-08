import "./index.scss";
import Logo from "../../assets/dnc-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo da DNC" />
    </div>
  );
};

export default Header;
