import express,{Express} from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import  notFound  from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import { connectDB } from "./db/connect.js";

dotenv.config()

const app:Express = express()
const port = process.env.PORT
const url = process.env.URL

app.use(express.static("./public"))
app.use(express.json())
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async() =>{
    try{
        await connectDB(url!)
        app.listen(port,()=>{
            console.log("App is listening on port ",port);
        })
    } catch(err) {
        console.log(err); 
    }
}

start()

// mongoose
//     .connect(url!)
//     .then(()=>{
//       console.log("CONNECTED TO DATABASE")
//       app.listen(port,()=>{
//           console.log("App is listening on port ",port);
//       })
//     })
//     .catch((err)=>{
//       console.log(err)
// })
