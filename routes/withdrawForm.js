import express from "express";
import User from "../models/formdata.js"; // Assuming you have a User model defined

const router=express.Router();



router.use("/",async (req,res)=>{
    res.render("withdrawForm.ejs");
})












export default router;