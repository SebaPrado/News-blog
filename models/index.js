const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require("./User");
const Comment = require("./Comment");
const Article = require("./Article");
const Role = require("./Role");

User.initModel(sequelize);
Comment.initModel(sequelize);
Article.initModel(sequelize);
Role.initModel(sequelize);

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

Comment.belongsTo(Article);
Article.hasMany(Comment);
// npm run table (chequeamos que en la table comment en TablePlus me haya creado un articleId)
User.hasMany(Article);
Article.belongsTo(User);
// npm run table (chequeamos que en la table articles me haya creado un userId)
Comment.belongsTo(User);
User.hasMany(Comment);
// npm run table (chequeamos que en la table comments me haya creado un userId)
User.belongsTo(Role);
Role.hasMany(User);

module.exports = {
  sequelize,
  Role,
  User,
  Comment,
  Article,
};
