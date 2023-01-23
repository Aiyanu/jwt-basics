var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import dotenv from "dotenv";
import notFound from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import { connectDB } from "./db/connect.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
const url = process.env.URL;
app.use(express.static("./public"));
app.use(express.json());
app.use(notFound);
app.use(errorHandlerMiddleware);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDB(url);
        app.listen(port, () => {
            console.log("App is listening on port ", port);
        });
    }
    catch (err) {
        console.log(err);
    }
});
start();
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
