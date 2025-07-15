import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import './agrumentCard.css'
import type { Way } from './argumentDataType.ts';

interface ArgumentsCardProps {
    argument: Way
}

export default function ArgumentsCard({ argument}: ArgumentsCardProps) {
    const ref = useIntersectionObserver();

    return (
        <div className="argument_card element-animation" ref={ref}>
            <img src={argument.img} width="295px" height="196.66px" alt="card-img" />
            <div className="text_on_card">
                <p className="argument">
                    <span style={{ fontSize: '60px', paddingRight: '15px' }}>
                        {argument.numberArg}
                    </span>
                    аргумент
                </p>
                <div className="head_card_text">{argument.argument}</div>
                <div className="card_text">{argument.text}</div>
            </div>
        </div>
    );
}