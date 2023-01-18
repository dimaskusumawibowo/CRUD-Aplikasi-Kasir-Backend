import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js"
import setTZ from 'set-tz';
setTZ('Asia/Jakarta')

console.log(new Date().toString())

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server Up dan Running');
})