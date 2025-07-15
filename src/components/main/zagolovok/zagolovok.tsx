import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import './zagolovok.css'

export default function HeaderTitle() {
    const ref = useIntersectionObserver();

    return (
        <h1
            ref={ref}
            className="container element-animation"
            id="zagolovokVverhu"
        >
            <div className="zagolovok">
                <strong style={{ fontWeight: 600 }}>
                    Ветеринарная клиника №1<br />
                    в Красноярске<br />
                </strong>
                <br />
                Ветеринарная клиника «Акелла» — частное многопрофильное лечебно-
                диагностическое учреждение. Клиника создана в 2008г. и занимает достойное
                место среди клиник г.Красноярска, неуклонно приумножая число спасенных
                жизней животных и благодарных клиентов.
            </div>
        </h1>
    );
}