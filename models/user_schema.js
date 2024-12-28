import mongoose, {Schema, model} from "mongoose";

const userSchema = new Schema({
    email:{},
    password:{},
    name:{},
    age:{},
    phone:{},
    address:{},
    token:{}
})

export default model("User", userSchema, "users"); 