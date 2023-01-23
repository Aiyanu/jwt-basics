import { NextFunction, Request, Response } from "express"
import CustomAPIError from "../errors/custom-error.js"
type ErrorT = { statusCode: number; message: any }
const errorHandlerMiddleware = (err:ErrorT, req:Request, res:Response, next:NextFunction) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).send('Something went wrong try again later')
}

export default errorHandlerMiddleware