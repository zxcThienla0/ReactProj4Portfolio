import { useState } from 'react';
import Modal from '../main/slider/modal/modal';

interface PriceCardProps {
  image: string;
  badge: string;
  items: string[];
  itemsPrice?: (number | string)[];
}

export default function PriceCard({ image, badge, items, itemsPrice }: PriceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="card">
        <a
          className="card-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          <img src={image} alt="Card-image" />
          <p className="badge">{badge}</p>
          <span className="card-title">
            <ul className="position-fix">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </span>
          <button className="card-button material-symbols-outlined">arrow_forward</button>
        </a>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={badge}
        items={items}
        itemsPrice={itemsPrice}
        image={image}
      />
    </>
  );
}