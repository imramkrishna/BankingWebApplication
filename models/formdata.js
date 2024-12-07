import mongoose,{Schema} from "mongoose";

//Creating Schema in mongoose to create model and supply data in mongoDB

const formData=mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    Dateofbirth:{
        type:Date,
        required:true,
    },
    AccountNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        unique  :true,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    },
    Balance:{
        type:Number,
        default:0,
    }
})
//Creating model of using Schema: 
const FormData=mongoose.model("FormData",formData);

//exporting this module: 

export default FormData;