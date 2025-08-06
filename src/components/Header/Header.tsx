import './Header.css';
import { useRef, useState } from 'react';
import vkIcon from '/icon/vk1.svg';
import instagramIcon from '/icon/instagram1.svg';
import logo from '/icon/logo.png';

import { Link } from 'react-router-dom';

export default function Header() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('showing');
      mobileMenuRef.current.classList.toggle('no_show');
    }
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="header" id="header">
      <div className="container" style={{
        paddingTop: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}>

        <div className="header__menu">
          <div className="container__header" style={{ float: "left" }}>
            <a href="https://vk.com/akella24vet" target="_blank" rel="noopener noreferrer" aria-label="Мы во ВКонтакте"
              className="header__button">
              <img src={vkIcon} className="socLogo" alt="VK" />
            </a>
            <a href="https://www.instagram.com/akella_vet/ " target="_blank" rel="noopener noreferrer" aria-label="Мы в Instagram" className="header__button">
              <img src={instagramIcon} className="socLogo" alt="Instagram" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=79082122144&text&type=phone_number&app_absent=0"
              className="header__button"
              style={{
                backgroundColor: "chartreuse",
                borderRadius: "15px",
                fontFamily: "'Courier New', Courier, monospace"
              }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp чат"
            >
              <p style={{ margin: "11px 0" }}>Чат WhatsApp</p>
            </a>
          </div>
        </div>

        <a href="index.html" className="header__logo" aria-label="Главная страница">
          <img src={logo} alt="Akella24" loading="lazy" />
        </a>

        <div className="header__menu hiden__mobile">
          <div className="container__header" style={{ justifyContent: "end" }}>
            <div className="head__info">
              Круглосуточно
              <br />
              Многоканальный телефон
              <br />
              <a href="tel:+73912922144" className="contact_number">
                +7 (391) 2-922-144
              </a>
              <br />
              Удобная парковка
              <br />
              <a href="#" className="blueA" style={{ padding: "0 5px" }} aria-label="Паспорт обязателен">
                Паспорт РФ на приёме обязателен!
              </a>
            </div>
          </div>
        </div>

        <div className="hiden__mobile">
          <Link to='/' className="header__button">
            Главная
          </Link>
          <Link to='/Info' className="header__button">
            Новости и Акции
          </Link>
          <Link to='/PriceList' className="header__button">
            Услуги и цены
          </Link>
          <Link to='/FormInv' className="header__button">
            Запись на приём
          </Link>
        </div>
      </div>

      <div className="header__menu mobile__on">
        <div className="container__header mobile__on">
          <button
            className="header_button_mobile showing"
            id="openButton"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" style={{ textAlign: 'center', padding: '15px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <Link to='/' className="header__button">
                Главная
              </Link>
            </li>
            <li>
              <Link to='/Info' className="header__button">
                Новости и Акции
              </Link>
            </li>
            <li>
              <Link to='/PriceList' className="header__button">
                Услуги и цены
              </Link>
            </li>
            <li>
              <Link to='/FormInv' className="header__button">
                Запись на приём
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}