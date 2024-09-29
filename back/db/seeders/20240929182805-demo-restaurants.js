'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Restuarants', [
      {
        name: '2 Берега',
        rating: 5.0,
        categories: "Фастфуд, Кофе",
        image: 'https://eda.yandex/images/3790679/59a4bdb4a9ea24997c9b3623ecfa1521-648x312.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Что-то с чем-то и точка',
        rating: 4.2,
        categories: "Фастфуд",
        image: 'https://eda.yandex/images/3724421/6f2f08dcfe935121fc72c6ee6e3a6508-648x312.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'АВБГ',
        rating: 3.1,
        categories: "Русская, Блины",
        image: "https://eda.yandex/images/3595381/02051d054e72652b2b60d14efc338d6b-648x312.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Берега',
        rating: 5.0,
        categories: "Фастфуд, Кофе",
        image: 'https://eda.yandex/images/3790679/59a4bdb4a9ea24997c9b3623ecfa1521-648x312.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Что-то с чем-то и точка',
        rating: 4.2,
        categories: "Фастфуд",
        image: 'https://eda.yandex/images/3724421/6f2f08dcfe935121fc72c6ee6e3a6508-648x312.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'АВБГ',
        rating: 3.1,
        categories: "Русская, Блины",
        image: "https://eda.yandex/images/3595381/02051d054e72652b2b60d14efc338d6b-648x312.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
