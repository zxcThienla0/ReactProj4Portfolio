import './priceList.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Card from './priceCard';
import cardsData from '../main/slider/cardData';
import useSearching from '../../hooks/useSearchPrice';

export default function PriceList() {
  const input = useSearching();
  const ref = useIntersectionObserver();

  return (
    <>
      <h1
        className="container element-animation"
        id="zagolovokVverhu"
        ref={ref}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="zagolovok">
          <strong style={{ fontWeight: 600 }}>Услуги и цены в ветклинике «Акелла»</strong>
        </div>
      </h1>

      <div className="container">
        <div>
          <h3 style={{ color: 'white', padding: '8px' }}>Поиск</h3>
          <input type="text" className="inputSearch" {...input} />
        </div>
      </div>

      <div className="container">
        <div className="price_container" style={{ minHeight: '930px' }}>
          {cardsData
            .filter((card) => {
              const searchValue = input.value.toLowerCase();

              const matchesBadge = card.badge?.toLowerCase().includes(searchValue);
              const matchesItems = card.items.some((item) =>
                item.toLowerCase().includes(searchValue)
              );

              return matchesBadge || matchesItems;
            })
            .map((card, index) => (
              <Card
                key={index}
                image={card.image}
                badge={card.badge}
                items={card.items}
                itemsPrice={card.itemsPrice}
              />
            ))}
        </div>
      </div>
    </>
  );
}