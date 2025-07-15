import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import Card from './card';
import cardsData from './cardData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { useState } from 'react';

interface ServicesSliderProps {
  onChange: (view: string) => void;
}

export default function ServicesSlider({ onChange }: ServicesSliderProps) {
  const ref = useIntersectionObserver();

  return (
    <>
      <div className="text-center element-animation" ref={ref}>
        <h2>Услуги</h2>
        <br />
        <p>
          Ветеринарная клиника «Акелла» специализируется на лечении кошек и собак. Мы можем помочь в любом вопросе — в
          любое время, ведь в клинике всегда дежурная смена врачей, оснащенные кабинеты и многолетний опыт работы со
          штатными и экстренными ситуациями.
        </p>
      </div>

      <div className="container">
        <div className="swiper container-card">
          <div className="card-wrapper">
            <Swiper
              modules={[Pagination, Navigation, A11y]}
              spaceBetween={30}
              loop={true}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="card-list swiper-wrapper"
              tag="ul"
              wrapperTag="div"
            >
              {cardsData.map((card, index) => (
                <SwiperSlide key={index}>
                  <Card
                    image={card.image}
                    badge={card.badge}
                    items={card.items}
                    itemsPrice={card.itemsPrice}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-pagination"></div>
            <div className="swiper-slide-button swiper-button-prev"></div>
            <div className="swiper-slide-button swiper-button-next"></div>
          </div>
        </div>
      </div>

      <div className="center-btn">
        <div className="btn">
          <button onClick={() => onChange('priceList')}>Все услуги</button>
        </div>
      </div>
    </>
  );
}