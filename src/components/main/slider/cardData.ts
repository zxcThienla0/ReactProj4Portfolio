interface CardData {
  image: string;
  badge: string;
  items: string[];
  itemsPrice?: (number | string)[];
}

const cardsData: CardData[] = [
    {
        image: "image-card/img3.webp",
        badge: "Терапия",
        items: [
            "Экстренная помощь",
            "Прием узкопрофильного специалиста",
            "Обработка швов",
            "Инъекции и уколы",
            "Удаление клещей у собак и кошек"
        ],
        itemsPrice: [
            "1000p",
            "1500p",
            "800p",
            "1000p",
            "3000p"
        ]
    },
    {
        image: "image-card/photo_2022-08-11_19-26-19-825x510.jpg",
        badge: "Вакцинация",
        items: [
            "Вакцинация кошек",
            "Вакцинация собак"
        ],
        itemsPrice: [
            "2000p",
            "2000p"
        ]
    },
    {
        image: "image-card/4qnnb11fm9os6jnkswn1b0o2ez2jdah8.jpg",
        badge: "Груминг",
        items: [
            "Стрижка кошек",
            "Подстригаение когтей",
            "Чистка ушей",
            "Чистка параанальных желез"
        ],
        itemsPrice: [
            "2000p",
            "1000p",
            "1000p",
            "3000p"
        ]
    },
    {
        image: "image-card/Header2_1570x990-min-600x378.jpg",
        badge: "Функциональная диагностика",
        items: [
            "Компьютерная томография",
            "УЗИ",
            "Рентген собаке, рентген кошке",
            "Урография",
            "Оксигенотерапия"
        ],
        itemsPrice: [
            "2000p",
            "1500p",
            "2000p",
            "3000p",
            "3000p"
        ]
    },
    {
        image: "image-card/2c21a9a78dbe3f1f4840965161c8ecbf.jpg",
        badge: "Стоматология",
        items: [
            "Чистка зубов",
            "Удаление зубов",
            "Установка зубов (имплантация)",
            "Коррекция"
        ],
        itemsPrice: [
            "2000p",
            "1000p",
            "2500p",
            "3000p"
        ]
    },
    {
        image: "image-card/0662fafd9db440ce5b55a27efbf69915.jpg",
        badge: "Хирургия",
        items: [
            "Стерилизация",
            "Кастрация",
            "Удаление грыжи",
            "Извлечение инородного тела",
            "И другие операции"
        ],
        itemsPrice: [
            "4200p",
            "4500p",
            "4000p",
            "3000p",
            "3000 - 10000p"
        ]
    }
];

export default cardsData;