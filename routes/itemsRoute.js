const express = require("express");
const itemController = require("../controllers/itemController");
const router = express.Router();

router
  .route("/")
  .post(itemController.createItem)
  .get(itemController.getAllItems);
router
  .route("/:id")
  .get(itemController.getItem)
  .patch(itemController.updateItems)
  .put(itemController.updateAllItems)
  .delete(itemController.deleteItem);

module.exports = router;
