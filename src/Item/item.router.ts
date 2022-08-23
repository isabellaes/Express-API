import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  deleteItem,
  updateItem,
} from "./item.controller";

const itemRouter = express.Router();
itemRouter.get("/", getAllItems);
itemRouter.get("/:id", getItemById);
itemRouter.post("/", createItem);
itemRouter.put("/:id", updateItem);
itemRouter.delete("/:id", deleteItem);

export default itemRouter;
