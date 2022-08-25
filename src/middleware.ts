import { NextFunction, Request, Response } from "express";

export const notFoundErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json("Not found. Try again...");
};
