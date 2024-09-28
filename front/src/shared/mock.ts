export interface ICard {
  id: number;
  name: string;
  rating: number;
  timing: number;
  categories: string[];
  image?: string;
}

export interface ICategory {
  id: number;
  name: string;
  cards: IMenuCard[];
}

export interface IMenuCard {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const RESTUARANTS_MOCK: ICard[] = [
  {
    id: 0,
    name: "2 Берега",
    rating: 3.4,
    timing: 50,
    categories: ["Фастфуд", "Кофе"],
    image:
      "https://eda.yandex/images/3790679/59a4bdb4a9ea24997c9b3623ecfa1521-648x312.jpg",
  },
  {
    id: 4,
    name: "Что-то с чем-то и точка",
    rating: 0.9,
    timing: 50,
    categories: ["Фастфуд"],
    image:
      "https://eda.yandex/images/3724421/6f2f08dcfe935121fc72c6ee6e3a6508-648x312.JPG",
  },
  {
    id: 1,
    name: "АВБГ",
    rating: 5.0,
    timing: 50,
    categories: ["Русская", "Блины"],
  },
  {
    id: 2,
    name: "Название 2",
    rating: 4.1,
    timing: 50,
    categories: ["Завтраки", "Кофе"],
    image:
      "https://eda.yandex/images/3790679/59a4bdb4a9ea24997c9b3623ecfa1521-648x312.jpg",
  },
  {
    id: 3,
    name: "Тестовое название 12",
    rating: 1.2,
    timing: 50,
    categories: ["Шаурма", "Тестовая категория"],
  },
  
];

export const MENU_MOCK: ICategory[] = [
  {
    id: 0,
    name: "Название категории 1",
    cards: [
      {
        id: 0,
        image:
          "https://eda.yandex/images/1397595/c495b9b7b4632db991f3db27ae58168b-300x300.jpeg",
        name: "Товар 1",
        price: 500,
      },
      {
        id: 1,
        image:
          "https://eda.yandex/images/1397595/c495b9b7b4632db991f3db27ae58168b-300x300.jpeg",
        name: "Товар 2",
        price: 341,
      },
      {
        id: 2,
        image:
          "https://eda.yandex/images/1397595/c495b9b7b4632db991f3db27ae58168b-300x300.jpeg",
        name: "Товар 3",
        price: 467,
      },
      {
        id: 3,
        image:
          "https://eda.yandex/images/1397595/c495b9b7b4632db991f3db27ae58168b-300x300.jpeg",
        name: "Баскет крыльев",
        price: 5020,
      },
      {
        id: 4,
        image: "",
        name: "Очень длинннннннннннннное название",
        price: 0,
      },
      {
        id: 5,
        image:
          "https://eda.yandex/images/1397595/c495b9b7b4632db991f3db27ae58168b-300x300.jpeg",
        name: "Двойной Биг Спешиал Демиглас",
        price: 1,
      },
    ],
  },
  {
    id: 1,
    name: "Длинннннннннннннное название категории",
    cards: [
      {
        id: 0,
        image:
          "https://eda.yandex/images/1397595/c495b9b7b4632db991f3db27ae58168b-300x300.jpeg",
        name: "Товар 1",
        price: 500,
      },
      {
        id: 1,
        image:
          "https://eda.yandex/images/1397595/c495b9b7b4632db991f3db27ae58168b-300x300.jpeg",
        name: "Товар 2",
        price: 341,
      },
      {
        id: 2,
        image:
          "https://eda.yandex/images/1397595/c495b9b7b4632db991f3db27ae58168b-300x300.jpeg",
        name: "Товар 3",
        price: 467,
      },
      {
        id: 3,
        image:
          "https://eda.yandex/images/1397595/c495b9b7b4632db991f3db27ae58168b-300x300.jpeg",
        name: "Баскет крыльев",
        price: 5020,
      },
      {
        id: 4,
        image: "",
        name: "Очень длинннннннннннннное название",
        price: 0,
      },
    ],
  },
];
