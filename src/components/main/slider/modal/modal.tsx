import { createPortal } from 'react-dom';
import './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: string[];
  itemsPrice?: (number | string)[];
  image?: string;
}

const Modal = ({ isOpen, onClose, title, items, itemsPrice }: ModalProps) => {
  if (!isOpen) return null;

  const priceList = items.map((item, index) => ({
    name: item,
    price: itemsPrice && itemsPrice[index] !== undefined
      ? itemsPrice[index]
      : 'Цена не указана',
  }));

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <ul className="price-list">
          {priceList.map((item, index) => (
            <li key={index} className="price-item">
              <span>{item.name}</span>
              <span className="price">
                {typeof item.price === 'number' ? `${item.price} ₽` : item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.getElementById('modal')!
  );
};

export default Modal;