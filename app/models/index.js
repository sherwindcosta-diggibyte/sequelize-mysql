const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,           // Use of host
  dialect: dbConfig.dialect,     // use of database
  pool: {
    max: dbConfig.pool.max,     
    min: dbConfig.pool.min,      
    acquire: dbConfig.pool.acquire,  // the pool will wait for 30 seconds before timing out a connection request
    idle: dbConfig.pool.idle         // and idle connections will be closed after 10 seconds.
  }
});

const db = {};

db.sequelize = Sequelize;
db.sequelize = sequelize;

db.task = require("./task.model.js")(sequelize, Sequelize);

module.exports = db;

