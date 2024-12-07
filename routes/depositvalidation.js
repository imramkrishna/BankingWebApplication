import express from "express";


import User from "../models/formdata.js";

const router=express.Router();  

router.post("/",async (req,res)=>{
    const {email,AccountNumber,amount}=req.body;
    
    try{

        const userExists=await User.findOne({email:email});
        console.log(userExists.AccountNumber);
        
        if(!userExists){
        
            res.send("User does not exist or please enter valid email and account number");
    
        }
        else {
            if(userExists.AccountNumber!=AccountNumber){
                res.send("Account number does not match with the email");
            }else{
                await User.updateOne(
                    { $inc: { Balance: req.body.amount } }
                );
            await userExists.save();
            res.send("Amount deposit successfully");

        }
        }
    }



        
    catch(err){
        console.log(err);
        res.status(500).send("Error occurred while depositing amount");
        
    }


  
        
})












export default router;