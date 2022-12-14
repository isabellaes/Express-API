import { Request, Response } from "express";
import { Item } from "./item.interface";

/* SEED DATA */
let items: Item[] = [
  { id: 1, name: "pizza", price: 120, description: "Hawaii" },
  { id: 2, name: "pizza", price: 120, description: "Kebab" },
  { id: 3, name: "pizza", price: 120, description: "Calzone" },
  { id: 4, name: "pizza", price: 120, description: "Special" },
  { id: 5, name: "pizza", price: 120, description: "Cappricosa" },
  { id: 6, name: "pizza", price: 120, description: "Vegan" },
];

export const getAllItems = async (req: Request, res: Response) => {
  if (items != null) {
    res.status(200).json(items);
  } else {
    res.status(404).json("Not found");
  }
};

export const getItemById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const result: Item | undefined = items.find((item) => item.id == id);

  if (result != null) {
    res.status(200).json(result);
  } else {
    res.status(404).json("Not found");
  }
};

export const createItem = (req: Request, res: Response) => {
  const id = new Date().valueOf();
  const item = req.body;

  const newItem: Item = {
    id,
    ...item,
  };
  items.push(newItem);

  res.status(201).json(newItem);
};

export const updateItem = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const itemIndex = items.findIndex((item: { id: number }) => item.id === id);
  if (itemIndex > 0) {
    const newItem = req.body;

    const updateItem: Item = {
      id,
      ...newItem,
    };

    items[itemIndex] = updateItem;
    res.status(201).json(updateItem);
  } else {
    res.status(404).json("Something went wrong...");
  }
};
export const deleteItem = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const itemToRemove: Item | undefined = items.find((item) => item.id == id);
  if (itemToRemove != undefined) {
    const item = items.indexOf(itemToRemove);
    items.splice(item, 1);
    res.status(200).json("Deleted succesfully");
  } else {
    res.status(404).json("Something went wrong...");
  }
};
