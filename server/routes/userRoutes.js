import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const salt = bcrypt.genSaltSync(10);

const jwtSecret = process.env.JWT_SECRET;

router.get("/test", (req, res) => {
  res.send("working");
});

router.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, salt);
  try {
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    const userId = user._id.toString();

    jwt.sign({ userId, userName }, jwtSecret, {}, (err, token) => {
      if (err) {
        console.error(err);
      }
      console.log(token);
      res
        .status(200)
        .cookie("token", token)
        .json({ userId });
    });

    res.send("created user");
  } catch (err) {
    res.send(err.message);
    console.log(err);
  }
});

router.post("/login", async (req, res) => {});

export default router;
