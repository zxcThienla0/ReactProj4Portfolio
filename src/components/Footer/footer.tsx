import './footer.css';

interface FooterMenuProps {
  title: string;
  links: { name: string; url: string }[];
}
interface ServicesSliderProps {
  onChange: (view: string) => void;
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

export default function Footer({ onChange }: ServicesSliderProps) {
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
      <div className="footer-img" />
      <footer className="footer">
        <div className="container">
          <div className="bottom-block">
            <a href="index.html" className="logo-img" aria-label="Главная страница">
              <img src="icon/logo-blue.png" alt="Akella24" />
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
                <img src="icon/vk1.svg" className="socLogo" alt="VK" />
              </a>
              <a
                href="https://www.instagram.com/akella_vet/ "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Мы в Instagram"
              >
                <img src="icon/instagram1.svg" className="socLogo" alt="Instagram" />
              </a>
            </div>

            <br />

            <button className="footer-button" aria-label="Записаться на приём" onClick={() => onChange('formInv')}>Записаться на приём</button>
          </div>
        </div>
      </footer>
    </>
  );
}