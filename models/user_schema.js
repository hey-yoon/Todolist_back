import mongoose, {Schema, model} from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchema = new Schema({
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    name:String,
    age:{type:Number, default:0},
    phone:{type:String,default:"000-0000-0000"},
    address:String,
    token:String, //refresh토큰
    createAt: {type:String,default: getCurrentTime},
    updateAt: {type:String,default: getCurrentTime}
})

export default model("User", userSchema, "users"); 