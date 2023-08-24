const dbconfig = require ("../config/db.config.js");

const Sequelize = require ("sequelize");
const dbConfig = require("../config/db.config.js");
const sequelize = new Sequelize(dbconfig.DB, dbconfig. USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    operatorsALIASES: false,

    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
