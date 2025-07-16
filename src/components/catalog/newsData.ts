import image1 from '/image4catalog/29-09-2022.jpg';
import image2 from '/image4catalog/08-11-2022.jpg';
import image3 from '/image4catalog/05-06-2020.jpg';
import image4 from '/image4catalog/26-02-2020.jpg';
import image5 from '/image4catalog/04-10-2019.jpg';
import image6 from '/image4catalog/28-04-2019.jpg';
import image7 from '/image4catalog/25-12-2017.jpg';
import image8 from '/image4catalog/25-05-2015.jpg';
import image9 from '/image4catalog/20-08-2018.jpg';
import image10 from '/image4catalog/22-12-2018.jpg';
import image11 from '/image4catalog/25-03-2019.jpg';
import image12 from '/image4catalog/21-10-2019.jpg';
import image13 from '/image4catalog/28-03-2020.jpg';
import image14 from '/image4catalog/56c67100-73c0-4c94-9418-0e3c62a741e3.avif';
import image15 from '/image4catalog/e655e1107f43976a31927e7d7430d2ac.webp';


export interface NewsProps {
    id: number
    badge: string
    name: string
    image: string
    category: 'news' | 'promotion';
    link: string
}

export const newsData: NewsProps[] = [
    {
        id: 1,
        badge: "Повышение квалификации врачей-хирургов.",
        name: "Прошло плановое обучение для врачей-хирургов нашей клиники в теории и практики. Лектором был один из ведущих хирургов ветеринарной медицины в России.",
        image: image1,
        category: "news",
        link: ""
    },
    {
        id: 2,
        badge: "Обучение в школе Митина.",
        name: "Наши коллеги прошли обучение в Школе постдипломного образования имени профессора В.Н. Митина. Компьютерная томография мелких домашних животных.",
        image: image2,
        category: "news",
        link: ""
    },
    {
        id: 3,
        badge: "Профессиональный корм FORZA в зоомагазине.",
        name: "В наличии в зоомагазине теперь имеет профессиональный корм FORZA.",
        image: image3,
        category: "news",
        link: ""
    },
    {
        id: 4,
        badge: "Акелла запустила дисконтные карты.",
        name: "Теперь у ветеринарной клиники есть собственные дисконтные карты.",
        image: image4,
        category: "promotion",
        link: ""
    },
    {
        id: 5,
        badge: "Развитие без остановки.",
        name: "Прошло обучение врачей клиники на тему «сердечно-легочная реанимация».",
        image: image5,
        category: "news",
        link: ""
    },
    {
        id: 6,
        badge: "Мы в Instagram",
        name: "Ветеринарная клиника Акелла завела страницу в социальной сети instagram.",
        image: image6,
        category: "news",
        link: ""
    },
    {
        id: 7,
        badge: "Раздел с оставленными животными.",
        name: "Создали страницу посвященную оставленным животным, которые в поисках нового дома.",
        image: image7,
        category: "promotion",
        link: ""
    },
    {
        id: 8,
        badge: "Начали применять газовую анестезию.",
        name: "Теперь в нашей клинике есть все необходимое оборудование для проведение сложных операция под полным наркозом.",
        image: image8,
        category: "news",
        link: ""
    },
    {
        id: 9,
        badge: "Скидки в зоомагазине",
        name: "появились скидки на товаре в зоомагазине при ветклинике",
        image: image9,
        category: "promotion",
        link: ""
    },
    {
        id: 10,
        badge: "Изменение прайс-листа.",
        name: "Повышение цен на услуги ветеринарной клиники",
        image: image10,
        category: "news",
        link: ""
    },
    {
        id: 11,
        badge: "Дневной стационар",
        name: "Расширение, Акелла открыла новый дневной стационар",
        image: image11,
        category: "news",
        link: ""
    },
    {
        id: 12,
        badge: "Национальная ветеринарная конференция.",
        name: "Наши сотрудники посетили Национальную ветеринарную конференцию в Москве.",
        image: image12,
        category: "news",
        link: ""
    },
    {
        id: 13,
        badge: "Работа в период пандемии.",
        name: "Работа клиники в период пандемии",
        image: image13,
        category: "news",
        link: ""
    },
    {
        id: 14,
        badge: "Снижение цен на летний сезон.",
        name: "Акелла снижает цены в летний сезон!",
        image: image14,
        category: "promotion",
        link: ""
    },
    {
        id: 15,
        badge: "Ночные посиделки",
        name: "Скидки на кофе с 00:00 до 07:00 в ветклинике Акелла",
        image: image15,
        category: "promotion",
        link: ""
    }
];