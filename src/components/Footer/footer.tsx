import './footer.css';
import logoBlue from '/icon/logo-blue.png';
import vkIcon from '/icon/vk1.svg';
import instagramIcon from '/icon/instagram1.svg';
import bgIMG from '../../../icon/backgroud-footer-image.jpg'
import { Link } from 'react-router-dom';


interface FooterMenuProps {
  title: string;
  links: { name: string; url: string }[];
}

const FooterMenu = ({ title, links }: FooterMenuProps) => (
  <nav aria-label={title}>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default function Footer() {
  const mainMenu = [
    { name: 'О нас', url: 'index.html' },
    { name: 'Новости и Акции', url: 'infoblock.html' },
    { name: 'Отзывы', url: '#' },
  ];

  const additionalMenu = [
    { name: 'Вакансии', url: '#' },
    { name: 'Донорам', url: '#' },
    { name: 'Им нужен дом', url: '#' },
  ];

  return (
    <>
      <div style={{height: "160px"}}><img src={bgIMG} className="footer-img"/></div>
      <footer className="footer">
        <div className="container">
          <div className="bottom-block">
            <a href="index.html" className="logo-img" aria-label="Главная страница">
              <img src={logoBlue} alt="Akella24" />
            </a>

            <a href="tel:+73912922144" className="fphone" aria-label="Позвонить">
              +7 (391) 2-922-144
            </a>

            <p>Для клиентов:</p>
            <ul>
              <li>Круглосуточно</li>
              <li>Без выходных</li>
              <li>Удобная парковка</li>
              <li>Паспорт на приёме обязателен</li>
            </ul>

            <p>
              Адрес: 660022, г. Красноярск, ул. Партизана Железняка, д. 9Г
            </p>
          </div>

          <div className="bottom-block bottom-block-mid pad">
            <meta itemProp="addressLocality" content="Красноярск" /><FooterMenu title="Основное меню" links={mainMenu} />
          </div>

          <div className="bottom-block bottom-block-mid">
            <FooterMenu title="Дополнительно" links={additionalMenu} />
          </div>
          <div className="bottom-block bottom-block-mid">
            <p>Присоединяйтесь к нам:</p>
            <div className="socials">
              <a
                href="https://vk.com/akella24vet "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Мы во ВКонтакте"
              >
                <img src={vkIcon} className="socLogo" alt="VK" />
              </a>
              <a
                href="https://www.instagram.com/akella_vet/ "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Мы в Instagram"
              >
                <img src={instagramIcon} className="socLogo" alt="Instagram" />
              </a>
            </div>

            <br />

            <Link to="/FormInv" className="footer-button">Записаться на приём</Link>
          </div>
        </div>
      </footer>
    </>
  );
}