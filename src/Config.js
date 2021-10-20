require('dotenv').config();

const config = {
  // Database
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
  },

  // Server
  port: process.env.PORT || 8080,
};

export default config;
