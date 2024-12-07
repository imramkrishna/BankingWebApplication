import express from "express";
const router=express.Router();
router.use("/",async (req,res)=>{
    res.render("recoverpassword.ejs");
})


export default router;