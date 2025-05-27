const db = require('../models');

const getAllCategories = async () => {
  try {
    const categories = await db.Category.findAll({
      include: ['articles']
    });
    return categories;
  } catch (error) {
    return error.message || "Failed to get categories";
  }
};

const getCategory = async (id) => {
  try {
    const category = await db.Category.findByPk(id);
    return category;
  } catch (error) {
    throw { status: 500, message: error.message || "Failed to get category" };
  }
};

const createCategory = async (name) => {
  try {
    const newCategory = await db.Category.create({ name });
    return newCategory;
  } catch (error) {
    return error.message || "Category could not be created";
  }
};

const updateCategory = async (id, name) => {
  try {
    const updatedCategory = await db.Category.update(
      { name },
      { where: { id } }
    );
    return updatedCategory;
  } catch (error) {
    return error.message || "Category could not be updated";
  }
};

const deleteCategory = async (id) => {
  try {
    const deletedCategory = await db.Category.destroy({ where: { id } });
    return deletedCategory;
  } catch (error) {
    return error.message || "Category could not be deleted";
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
