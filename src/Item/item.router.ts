import express from "express";
import {
  getAllItems,
  createItem,
  deleteItem,
  updateItem,
} from "./item.controller";

const itemRouter = express.Router();
itemRouter.get("/", getAllItems);
itemRouter.post("/", createItem);
itemRouter.put("/:id", updateItem);
itemRouter.delete("/:id", deleteItem);

export default itemRouter;
