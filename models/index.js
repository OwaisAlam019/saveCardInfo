'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
  console.log(sequelize);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    
    // const model = sequelize['import'](path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize)
    console.log(JSON.stringify(model),model,"model");
    db[model.name] = model;
    console.log(JSON.stringify(db[model.name]),"db[model.name]")
  });

Object.keys(db).forEach(modelName => {
  console.log(modelName,"modelName")
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// sequelize.sync({alter:true});
sequelize.sync({force:true}); // all tables will be truncated



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
