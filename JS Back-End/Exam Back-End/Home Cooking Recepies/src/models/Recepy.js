import { Model, Schema, Types } from "mongoose";

const Recepy = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    owner: {
        type: Types.ObjectId,
        ref: "User"
    }
});

export default Model("Recepy", Recepy);