import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import './donarBlock.css'

export default function DonorSection() {
    const ref = useIntersectionObserver();
    const ref1 = useIntersectionObserver();
    return (
        <div className="container">
            <div className="donar-block leftAnimations element-animation" ref={ref1}>
                <img src="images/main-img2.png" alt="Счастливая собака" style={{ width: '100%' }} />
            </div>

            <div className="donar-block rightAnimations element-animation" ref={ref}>
                <h2>Развиваем Донорство</h2>
                <p style={{ color: '#0588fb', fontSize: '20px' }}>
                    Одна из немногих ветклиник в Красноярске
                </p>
                <br />
                <p style={{ color: '#313635', fontSize: '14px' }}>
                    В нашей клинике есть все необходимое оборудование, опытные руки наших врачей и
                    необходимые медикаменты для борьбы с любой проблемой у домашних животных, а вот донорской крови не
                    всегда хватает. Именно поэтому мы взялись за формирование собственной базы доноров, которые имеют свои
                    преимущества:
                </p>
                <br />
                <ul style={{ color: '#313635', fontSize: '14px', paddingLeft: '17px' }}>
                    <li>Выплаты за сдачу крови,</li>
                    <li>Бесплатные анализы для доноров,</li>
                    <li>Почет и уважение от врачей и владельцев спасенных питомцев.</li>
                </ul>
                <br />
                <p style={{ color: '#313635', fontSize: '14px' }}>
                    Помните! Донор крови не является жертвой. Донор сдает умеренное количество крови, чтобы не вредить своему
                    здоровью и самочувствию. И в быстрые сроки он восстанавливает первоначальное количество в своем организме.
                    Любые вопросы по вступлению в клуб доноров можете задавать по телефону{' '}
                    <strong>
                        <a href="tel:+73912922144" style={{ color: 'black' }}>
                            +7 (391) 2-922-144.
                        </a>
                    </strong>
                </p>
                <br />
                <div className="yyy" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <a href="" style={{ marginRight: '5px' }}>
                        <span>Выплаты донорам</span>
                    </a>
                    <a href="" style={{ marginRight: '5px' }}>
                        <span>Подробнее о донорстве</span>
                    </a>
                </div>
            </div>
        </div>
    );
}