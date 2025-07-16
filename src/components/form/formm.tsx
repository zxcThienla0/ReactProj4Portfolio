import './form.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useState, useRef } from 'react';

import { validateForm } from './form';

import dogImg from '/icon/dog.png';
import catImg from '/icon/cat.png';

interface FormData {
  petType: string;
  goal: string;
  comment: string;
  name: string;
  phone: string;
}

const FormInv = () => {
  const [formData, setFormData] = useState<FormData>({
    petType: '',
    goal: '',
    comment: '',
    name: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const ref = useIntersectionObserver();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    const { isValid, errors, firstInvalidField } = validateForm(form);

    setErrors(errors);

    if (!isValid && firstInvalidField) {
      firstInvalidField.focus();
    } else {
      console.log('Форма прошла валидацию:', formData);
      alert('Форма успешно отправлена!');
    }
  };

  return (
    <>
      <h1
        className="container element-animation"
        id="zagolovokVverhu"
        ref={ref}
        style={{ justifyContent: 'center' }}
      >
        <div className="zagolovok">
          <strong style={{ fontWeight: 600 }}>
            Запись на прием в ветклинике «Акелла»
          </strong>
        </div>
      </h1>
      <br />
      <br />
      <section>
        <div className="container" style={{ justifyContent: 'center' }}>
          <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
            <div className="block-bottom">
              <div className="name-pole">Укажите вид питомца:</div>

              <input
                type="radio"
                className="noneput"
                value="Собака"
                name="petType"
                id="radio1"
                checked={formData.petType === 'Собака'}
                onChange={handleChange}
                required
              />
              <label className="btn-img tac two" htmlFor="radio1">
                <div className="pet-img" style={{ backgroundImage: `url(${dogImg})` }}></div>
                <span>Собака</span>
              </label>

              <input
                type="radio"
                className="noneput"
                value="Кошка"
                name="petType"
                id="radio2"
                checked={formData.petType === 'Кошка'}
                onChange={handleChange}
                required
              />
              <label className="btn-img tac" htmlFor="radio2">
                <div className="pet-img" style={{ backgroundImage: `url(${catImg})` }}></div>
                <span>Кошка</span>
              </label>

              <br />
              {errors.petType && (
                <div data-js-form-field-errors className="field__errors">
                  {errors.petType.map((msg, i) => (
                    <span key={i} className="field__error">{msg}</span>
                  ))}
                </div>
              )}
            </div>
            <br />
            <div>
              <select
                name="goal"
                className="form-input select"
                value={formData.goal}
                onChange={handleChange}
                required
              >
                <option value="">Причина обращения*</option>
                <option value="Консультация">Консультация</option>
                <option value="Диагностика">Диагностика</option>
                <option value="Лечение">Лечение</option>
                <option value="Профилактика">Профилактика</option>
                <option value="Плановая процедура">Плановая процедура</option>
                <option value="Косметологическая процедура">Косметологическая процедура</option>
                <option value="Затрудняюсь ответить">Затрудняюсь ответить</option>
              </select>
              {errors.goal && (
                <div data-js-form-field-errors className="field__errors">
                  {errors.goal.map((msg, i) => (
                    <span key={i} className="field__error">{msg}</span>
                  ))}
                </div>
              )}
            </div>
            <br />
            <div>
              <textarea
                className="form-input"
                name="comment"
                placeholder="Комментарий*"
                minLength={5}
                maxLength={500}
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>
              {errors.comment && (
                <div data-js-form-field-errors className="field__errors">
                  {errors.comment.map((msg, i) => (
                    <span key={i} className="field__error">{msg}</span>
                  ))}
                </div>
              )}
            </div>
            <br />
            <div>
              <input
                className="form-input"
                name="name"
                type="text"
                placeholder="Ваше имя*"
                minLength={2}
                maxLength={15}
                pattern="^[A-Za-zА-Яа-я\sё]+$"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <div data-js-form-field-errors className="field__errors">
                  {errors.name.map((msg, i) => (
                    <span key={i} className="field__error">{msg}</span>
                  ))}
                </div>
              )}
            </div>
            <br />
            <div>
              <input
                pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
                className="form-input"
                name="phone"
                type="tel"
                placeholder="Ваш номер телефона*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <div data-js-form-field-errors className="field__errors">
                  {errors.phone.map((msg, i) => (
                    <span key={i} className="field__error">{msg}</span>
                  ))}
                </div>
              )}
            </div>
            <br />
            <div className="real-btn">
              <button type="submit">
                <span>Записаться</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormInv;