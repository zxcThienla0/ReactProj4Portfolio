import './facts.css'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function AboutClinic() {
    const ref = useIntersectionObserver();
    return (
        <div className="block_three">
            <div className="container aaa element-animation" ref={ref}>
                <div className="half-block">
                    <h2>Ветклиника «Акелла»</h2>
                    <div className="name-two">Более 17 лет лечим и спасаем животных</div>
                    <div className="block_text">
                        <p>
                            Наши дежурные специалисты помогут Вам в любое время суток, даже ночное!
                            Круглосуточная работа, лечение и даже профилактика заболеваний у животных.
                            Каждый специалист нашей ветеринарной клиники проходит постоянное повышение
                            квалификации — принимает участие в профильных мероприятиях, тренингах,
                            семинарах.
                        </p>
                        <p className="last">
                            Каждый из врачей имеет свою основную специфику деятельности, на которой он
                            специализируется (стоматолог, репродуктолог, офтальмолог, дерматолог,
                            хирург и другие), и вся команда отлично дополняет друг друга, выполняя самые
                            сложные задачи на отлично! Мы придерживаемся своих основных убеждений и
                            принципов: индивидуальный подход к каждому клиенту с его питомцем и полная
                            готовность и желание сделать всё для благополучия наших маленьких друзей.
                        </p>
                    </div>
                    <div className="btn">
                        <a href="/about" aria-label="Подробнее о клинике">
                            <span>Подробнее о клинике</span>
                        </a>
                    </div>
                </div>
                <div className="half-block">
                    <meta content="Круглосуточная ветеринарная клиника Акелла" />
                    <meta content="лечение домашних животных в ветклинике Акелла" />
                    <meta content="Акелла" />
                    <meta content="ветклиника в Красноярске" />
                    <img
                        className="half-block-img"
                        src="images/main-img1.jpg"
                        alt="Забота о собаке"
                    />
                </div>

                <div className="facts">
                    <div className="fact">
                        <div>
                            <span>460</span> м²
                        </div>
                        <span>Площадь клиники</span>
                    </div>
                    <div className="fact">
                        <div>
                            <span>365</span> дней
                        </div>
                        <span>Работаем без выходных</span>
                    </div>
                    <div className="fact">
                        <div>
                            <span>52</span> человека
                        </div>
                        <span>Штат клиники</span>
                    </div>
                    <div className="fact">
                        <div>
                            <span>20</span> мест
                        </div>
                        <span>В стационаре клиники</span>
                    </div>
                </div>
            </div>
        </div>
    );
}