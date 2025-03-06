const itemService = require("../services/itemServices");

exports.createItem = async (req, res) => {
  try {
    const item = await itemService.createItem(req.body);
    res.status(201).json({
      status: "success",
      data: item,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await itemService.getItem(req.params.id);
    if (!item) {
      return res.status(404).json({
        status: "fail",
        message: "Item not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: item,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const allItems = await itemService.getAllItems();
    return res.status(200).json({
      status: "success",
      data: allItems,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.updateItems = async (req, res) => {
  try {
    const updatedItem = await itemService.updateItems(req.params.id, req.body);
    return res.status(200).json({
      status: "success",
      data: updatedItem,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.updateAllItems = async (req, res) => {
  try {
    const updatedItems = await itemService.updateItems(req.params.id, req.body);
    return res.status(200).json({
      status: "success",
      data: updatedItems,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deleteItem = await itemService.deleteItem(req.params.id, req.body);
    return res.status(200).json({
      status: "success",
      data: deleteItem,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
