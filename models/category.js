'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Una categoría puede pertenecer a muchos artículos
      Category.belongsToMany(models.Article, {
        through: 'articleCategories',
        as: 'articles'
      });
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
