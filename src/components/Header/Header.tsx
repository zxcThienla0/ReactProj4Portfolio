import './Header.css';
import { useRef, useState } from 'react';
type Tab = 'main' | 'catalog' | 'formInv' | 'priceList'
interface HeaderProps {
  active: Tab
  onChange: (section: string) => void;
}

export default function Header({ onChange }: HeaderProps) {
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
              <img src="/icon/vk1.svg" className="socLogo" alt="VK" />
            </a>
            <a href="https://www.instagram.com/akella_vet/ " target="_blank" rel="noopener noreferrer" aria-label="Мы в Instagram" className="header__button">
              <img src="icon/instagram1.svg" className="socLogo" alt="Instagram" />
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
          <img src="icon/logo.png" alt="Akella24" loading="lazy" />
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
          <button className="header__button" onClick={() => onChange('main')}>
            Главная
          </button>
          <button className="header__button" onClick={() => onChange('catalog')}>
            Новости и Акции
          </button>
          <button className="header__button" onClick={() => onChange('priceList')}>
            Услуги и цены
          </button>
          <button className="header__button" onClick={() => onChange('formInv')}>
            Запись на приём
          </button>
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
              <button className="header__button" onClick={() => onChange('main')}>Главная</button>
            </li>
            <li>
              <button className="header__button" onClick={() => onChange('catalog')}>Новости и Акции</button>
            </li>
            <li>
              <button className="header__button" onClick={() => onChange('priceList')}>Услуги и цены</button>
            </li>
            <li>
              <button className="header__button" onClick={() => onChange('formInv')}>Запись на приём</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}