require('dotenv').config(); // Подключаем dotenv для загрузки переменных из .env

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "ekeer_db",
    host: "localhost",
    port: 5432, 
    dialect: 'postgres', 
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    port: 5432,
    dialect: 'postgres',
  }
};