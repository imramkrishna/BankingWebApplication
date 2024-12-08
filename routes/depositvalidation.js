import express from "express";


import User from "../models/formdata.js";



mongoose.connect('mongodb+srv://BankingApp:ramkrishna@cluster0.vr9m2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});


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