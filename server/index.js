import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import maintainRoutes from './routes/maintainRoutes.js'
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
 dotenv.config()

const dbConnection = mongoose
  .connect(
    "mongodb+srv://auth-app:auth-app-password@auth-app.fbwabpk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Successfully connected to MongoDB"));

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/', maintainRoutes);
app.use('/auth', userRoutes)

app.listen(8000, () => {
  console.log("App listening to port 8000.");
});
