const express = require("express");
const { getAllCategories, addCategory, deleteCategory, updateCategory } = require("../controllers/categoryController");
const categoryRouter = express.Router();
const auth = require("../middleware/auth");

categoryRouter.get("/get",auth,getAllCategories);

categoryRouter.post("/add",auth,addCategory);

categoryRouter.put("/:id",auth,updateCategory);

categoryRouter.delete("/:id",auth,deleteCategory);

module.exports = categoryRouter;