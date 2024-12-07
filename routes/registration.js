import express from "express";


const router=express.Router();

router.get('/',(req,res)=>{
    res.render("registrationform.ejs")
})


export default router;