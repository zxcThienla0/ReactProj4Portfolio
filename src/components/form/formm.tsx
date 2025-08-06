import './form.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import dogImg from '/icon/dog.png';
import catImg from '/icon/cat.png';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
  petType: string;
  goal: string;
  comment: string;
  name: string;
  phone: string;
}

const FormInv = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: {
      petType: ''
    }
  })

  const onsubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset()
  }

  const errorName = errors['name']?.message
  const errorPhone = errors['phone']?.message
  const errorComment = errors['comment']?.message
  const errorGoal = errors['goal']?.message
  const errorPetType = errors['petType']?.message

  const ref = useIntersectionObserver();

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
          <form className="form" onSubmit={handleSubmit(onsubmit)} noValidate>
            <div className="block-bottom">
              <div className="name-pole">Укажите вид питомца:</div>

              <input
                type="radio"
                className="noneput"
                value="Собака"
                id="radio1"
                {
                ...register('petType', {
                  required: 'Это поле обязательно'
                })
                }
              />
              <label className="btn-img tac two" htmlFor="radio1">
                <div className="pet-img" style={{ backgroundImage: `url(${dogImg})` }}></div>
                <span>Собака</span>
              </label>

              <input
                type="radio"
                className="noneput"
                value="Кошка"
                id="radio2"
                {
                ...register('petType', {
                  required: 'Это поле обязательно'
                })
                }
              />
              <label className="btn-img tac" htmlFor="radio2">
                <div className="pet-img" style={{ backgroundImage: `url(${catImg})` }}></div>
                <span>Кошка</span>
              </label>

              {errorPetType && <p style={{ color: 'red' }}>{errorPetType}</p>}
              <br />
            </div>
            <br />
            <div>
              <select
                className="form-input select"
                {
                ...register('goal', {
                  required: 'Выберете причину'
                })
                }
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
            </div>
            {errorGoal && <p style={{ color: 'red' }}>{errorGoal}</p>}
            <br />
            <div>
              <textarea
                style={{ resize: 'none' }}
                className="form-input"
                placeholder="Комментарий*"
                {
                ...register('comment', {
                  required: 'Это поле обязательно',
                  minLength: {
                    value: 5,
                    message: 'Комментарий должен быть не менее 5 символов'
                  },
                  maxLength: {
                    value: 500,
                    message: 'Комментарий не должен превышать 500 символов'
                  },

                })
                }
              ></textarea>
              {errorComment && <p style={{ color: 'red' }}>{errorComment}</p>}
            </div>
            <br />
            <div>
              <input
                className="form-input"
                type="text"
                placeholder="Ваше имя*"
                {
                ...register('name', {
                  required: 'Это поле обязательно',
                  minLength: {
                    value: 2,
                    message: 'Имя должно быть не менее 2 символов'
                  },
                  maxLength: {
                    value: 15,
                    message: 'Имя не должно превышать 15 символов'
                  },
                  pattern: {
                    value: /^[A-Za-zА-Яа-я\sё]+$/i,
                    message: 'Неправильно введено имя',
                  }
                })
                }
              />
              {errorName && <p style={{ color: 'red' }}>{errorName}</p>}
            </div>
            <br />
            <div>
              <input
                className="form-input"
                type="tel"
                placeholder="Ваш номер телефона*"
                {
                ...register('phone', {
                  required: 'Это поле обязательно',
                  pattern: {
                    value: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                    message: 'Неправильно введён номер',
                  }
                })}
              />
              {errorPhone && <p style={{ color: 'red' }}>{errorPhone}</p>}
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