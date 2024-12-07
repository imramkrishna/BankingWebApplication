import express from "express";
import mongoose from "mongoose";
import User from "../models/formdata.js"



//Sending post request using express router :

const router=express.Router();


router.post("/", async (req, res) => {
  const { Name, Address, Dateofbirth, email, password,AccountNumber } = req.body;

  if (!email) {
    return res.status(400).send("Email is required.");
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("User with this email already exists!");
    }

    const newUser = new User({ Name, Address, Dateofbirth, email, password,AccountNumber});
    await newUser.save();
    res.status(201).render("message.ejs");
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send("Email already exists. Please use a different email.");
    }
    console.error(err);
    res.status(500).send("An error occurred while creating the account.");
  }
});












export default router;