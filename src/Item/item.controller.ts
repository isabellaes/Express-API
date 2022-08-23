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

/*const fs = require("fs");*/

export const getAllItems = async (req: Request, res: Response) => {
  res.status(200).json(items);
};

export const createItem = (req: Request, res: Response) => {
  const id = new Date().valueOf();
  const item = req.body;

  const newItem: Item = {
    id,
    ...item,
  };
  items.push(newItem);
  /*const jsonContent = JSON.stringify(items);
  fs.writeFile("./item.json", jsonContent, "utf8", function () {
    console.log("The file was saved!");
  });*/

  res.status(201).json(newItem);
};

export const updateItem = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const itemIndex = items.findIndex((item: { id: number }) => item.id === id);

  const newItem = req.body;

  const updateItem: Item = {
    id,
    ...newItem,
  };

  items[itemIndex] = updateItem;
  res.status(201).json(updateItem);
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
