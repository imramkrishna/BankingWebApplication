import User from "../models/formdata.js";
import router from "./registration.js";
import mongoose from 'mongoose';


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

     



const checkCredentials = async (req, res, next) => {
    var { email, password,AccountNumber,amount } = req.body;
        var email=email.toLowerCase();
        const user = await User.findOne({ email, password,AccountNumber });
    try {
        
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
router.post('/', checkCredentials, async(req, res) => {
    if (req.user) {
        if(req.user.Balance<=req.body.amount){
            return res.status(500).send("Insufficient balance");
        }else{
        await user.updateOne(
            { $inc: { Balance: -req.body.amount } }
        );
        await req.user.save();

        res.send("Withdrawal successful");
        
    }
    } else {
        return res.status(500).send("Error occurred during login");
    }

})










export default router;