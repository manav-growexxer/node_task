const Items = require("../models/itemModel");

exports.createItem = async (Item) => {
  try {
    const item = await Items.create(Item);
    return item;
  } catch (error) {
    throw error;
  }
};

exports.getItem = async (id) => {
  try {
    const items = await Items.findById(id);
    return items;
  } catch (error) {
    throw error;
  }
};

exports.getAllItems = async () => {
  try {
    const items = await Items.find();
    return items;
  } catch (error) {
    throw error;
  }
};

exports.updateItems = async (id, field) => {
  try {
    const updatedValues = await Items.findByIdAndUpdate(id, field);
    console.log(field);
    return updatedValues;
  } catch (error) {
    throw error;
  }
};

exports.updateAllItems = async (id, body) => {
  try {
    const updatedAllValues = await Items.findByIdAndUpdate(id, body);
    return updatedAllValues;
  } catch (error) {
    throw error;
  }
};

exports.deleteItem = async (id, body) => {
  try {
    const deleteItem = await Items.findByIdAndDelete(id, body);
    return deleteItem;
  } catch (error) {
    throw error;
  }
};
