const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://blender_user:WTYOSlOnEOKkkrGx1YDx9yqaUHjt2ozv@dpg-ck9d2370vg2c73djgn60-a.frankfurt-postgres.render.com/blender', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;