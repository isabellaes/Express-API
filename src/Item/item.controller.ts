import { Request, Response } from "express";
import { Item } from "./item.interface";

/* SEED DATA */
let items: Item[] = [
  { id: 1, name: "pizza", price: 120, description: "Tasty" },
  { id: 2, name: "pizza", price: 120, description: "Tasty" },
  { id: 3, name: "pizza", price: 120, description: "Tasty" },
  { id: 4, name: "pizza", price: 120, description: "Tasty" },
  { id: 5, name: "pizza", price: 120, description: "Tasty" },
  { id: 6, name: "pizza", price: 120, description: "Tasty" },
];

export const getAllItems = async (req: Request, res: Response) => {};

export const createItem = (req: Request, res: Response) => {};

export const updateItem = (req: Request, res: Response) => {};
export const deleteItem = (req: Request, res: Response) => {};
