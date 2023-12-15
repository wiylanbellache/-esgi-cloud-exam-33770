const { Sequelize } = require('sequelize');
require('dotenv').config();

// database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    },
  },
);

// authentication and synchronization
sequelize
  .authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() =>
    console.log(
      "Cannot connect to database, please check environment credentials"
    )
  );

module.exports = sequelize;
