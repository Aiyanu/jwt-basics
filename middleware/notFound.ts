import { Response,Request } from "express";

const notFound = (req:Request,res:Response) => res.status(404).send("Not found")

export default notFound