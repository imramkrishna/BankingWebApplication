import express from "express";
import User from "../models/formdata.js";
const router=express.Router();



const checkCredentials = async (req, res, next) => {
    try {
        let {email,AccountNumber} = req.body;
        
        email=email.toLowerCase();
        const user = await User.findOne({ email,AccountNumber });
        if (!user) {
            return res.status(401).send("Invalid email or password or AccountNumber");
        }

        req.user = user; // Attach the user to the request object
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send("Error occurred while checking credentials");
    }
};


router.post("/",checkCredentials,async (req,res)=>{
    res.send(`Your password is: ${req.user.password}`);
})

export default router