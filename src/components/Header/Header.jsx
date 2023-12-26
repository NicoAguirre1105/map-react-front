// import logo from "./ubi"
import { AccountSection } from "../AccountSection/AccountSection"
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* <img src={} alt="" className="className" /> */}
      <div className="logo"></div>
      <nav className='nav-desktop'>
        <ul className="page-menu">
          <li><a href="./Home">Главная</a></li>
          <li><a href="./About">Компания</a></li>
          <li><a href="./Presets">Настройки</a></li>
          <li><a href="./Download">Загрузка</a></li>
        </ul>
        <AccountSection/>
      </nav>
    </header>
  );
}

export default Header;