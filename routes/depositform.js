import express from "express";

const router=express.Router();


router.use("/",async (req,res)=>{
    res.render("depositform.ejs");
})












export default router;