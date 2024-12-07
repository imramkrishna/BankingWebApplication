import express from "express";
import mongoose from "mongoose";
import User from "../models/formdata.js"; // Assuming you have a User model defined
const router = express.Router();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB for checking credentials");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const checkCredentials = async (req, res, next) => {
    try {
        var { email, password } = req.body;
        var email=email.toLowerCase();
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).send("Invalid email or password");
        }

        req.user = user; // Attach the user to the request object
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send("Error occurred while checking credentials");
    }
};

router.post('/', checkCredentials, (req, res, next) => {
    if (req.user) {
        return res.render("accountDetails.ejs",{user:req.user});
    } else {
        return res.status(500).send("Error occurred during login");
    }
});


export default router;