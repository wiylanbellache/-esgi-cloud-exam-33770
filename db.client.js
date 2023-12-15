const { Sequelize } = require('sequelize');

// database
const sequelize = new Sequelize(
  'blender', // Database name
  'blender_user', // User
  'WTYOSlOnEOKkkrGx1YDx9yqaUHjt2ozv', // Password
  {
    host: 'dpg-ck9d2370vg2c73djgn60-a', // Host
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
  }
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => sequelize.sync())
  .catch(() => console.log("Cannot connect to the database, please check environment credentials"));

module.exports = sequelize;
