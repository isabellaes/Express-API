import { Request, Response } from "express";
import { Item } from "./item.interface";

/* SEED DATA */
let items: Item[] = [
  { id: 1, name: "pizza", price: 120, description: "Hawai" },
  { id: 2, name: "pizza", price: 120, description: "Kebab" },
  { id: 3, name: "pizza", price: 120, description: "Calzone" },
  { id: 4, name: "pizza", price: 120, description: "Special" },
  { id: 5, name: "pizza", price: 120, description: "Cappricosa" },
  { id: 6, name: "pizza", price: 120, description: "Vegan" },
];

export const getAllItems = async (req: Request, res: Response) => {
  res.status(200).json(items);
};

export const createItem = (req: Request, res: Response) => {
  /*const id = new Date().valueOf();
  const newItem: Item = {
    id: id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };
  items.push(newItem);

  res.status(201).json(newItem);*/
};

export const updateItem = (req: Request, res: Response) => {};
export const deleteItem = (req: Request, res: Response) => {};
