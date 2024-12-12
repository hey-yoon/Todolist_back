import mongoose, {Schema, model} from "mongoose";

const todoSchema = new Schema({
    id:{type: Number,required: true ,unique: true},
    title:{type: String ,required: true},
    isChecked:{type: Boolean,required: true, default: false}
})

export default model("Todo", todoSchema, "todos"); 