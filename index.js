import "dotenv/config";
import express from "express";
import registrationrouter from "./routes/registration.js"
import formvalidationrouter from "./routes/formvalidation.js"
import accountInfo from "./routes/accountInfo.js"
import mongoose from "mongoose";
import depositForm from "./routes/depositform.js"
import depositvalidation from "./routes/depositvalidation.js"
import withdrawForm from "./routes/withdrawForm.js"
import withdrawValidation from "./routes/withdrawValidation.js"
import recoverpassword from "./routes/recoverpassword.js"
import passwordValidation from "./routes/passwordValidation.js"
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});




const port=process.env.PORT||3000;
const app=express();

//allowing app to access folders: 
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));


app.use(express.json()); // Necessary for `req.body` to work
app.use(express.urlencoded({ extended: true })); 

//Redirecting to online account registration: 
app.use("/registration",registrationrouter)
app.use("/submit",formvalidationrouter)
app.use("/accountInfo",accountInfo)
app.use("/depositform",depositForm)
app.use("/depositvalidation",depositvalidation)
app.use("/withdrawForm",withdrawForm)
app.use("/withdrawValidation",withdrawValidation)
app.use("/recoverPassword",recoverpassword)
app.use("/passwordValidation",passwordValidation)

//setting ejs template:
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.render("index.ejs");
})












//Listening to app : 
app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})