import express from "express";
import itemRouter from "./Item/item.router";
import { notFoundErrorHandler } from "./middleware";

const app = express();

app.use(express.json());
app.use("/api/items", itemRouter);

app.use(notFoundErrorHandler);

app.listen(3000, () => {
  console.log("server is running on: http://localhost:3000");
});
