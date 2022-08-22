import express from "express";
import { getAllItems, createItem, deleteItem } from "./item.controller";

const itemRouter = express.Router();
itemRouter.get("/", getAllItems);
itemRouter.post("/", createItem);
itemRouter.delete("/", deleteItem);

export default itemRouter;
