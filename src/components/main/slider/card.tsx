import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import Modal from './modal/modal';

interface CardProps {
  image: string;
  badge: string;
  items: string[];
  itemsPrice?: (number | string)[];
}

const Card = ({ image, badge, items, itemsPrice }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <SwiperSlide className="card-item swiper-slide">
        <a
          className="card-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          <img src={image} alt="Card-image" className="card-image" />
          <p className="badge">{badge}</p>
          <span className="card-title">
            <ul className="position-fix">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </span>
          <button className="card-button material-symbols-outlined">
            arrow_forward
          </button>
        </a>
      </SwiperSlide>

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
};

export default Card;