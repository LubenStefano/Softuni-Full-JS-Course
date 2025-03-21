import { Schema, model, Types } from "mongoose";

const techSchema = new Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required!'],
    },
    model: {
        type: String,
        required: [true, 'Model is required!'],
    },
    hardDisk: {
        type: String,
        required: [true, 'Hard disk is required!'],
    },
    screenSize: {
        type: String,
        required: [true, 'Screen size is required!'],
    },
    ram: {
        type: String,
        required: [true, 'RAM is required!'],
    },
    operatingSystem: {
        type: String,
        required: [true, 'Operating system is required!'],
    },
    cpu: {
        type: String,
        required: [true, 'CPU is required!'],
    },
    gpu: {
        type: String,
        required: [true, 'GPU is required!'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
    },
    color: {
        type: String,
        required: [true, 'Color is required!'],
    },
    weight: {
        type: String,
        required: [true, 'Wight is required!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
    },
    preferredList:[{
        type: Types.ObjectId,
        ref: 'User'
    }],
    owner:{
        type: Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Tech = model('Tech', techSchema);

export default Tech;
