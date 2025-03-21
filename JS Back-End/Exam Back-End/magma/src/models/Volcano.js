import { Schema, model, Types } from "mongoose";
import User from './User.js';

const volcanoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minlength: 2,
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
    minlength: 3,
  },
  elevation: {
    type: Number,
    required: [true, "Elevation is required!"],
    min: 0,
  },
  lastEruption: {
    type: Number,
    required: [true, "Last eruption is required!"],
    min: 0,
    max: 2021,
  },
  image: {
    type: String,
    required: [true, "Image is required!"],
    match: /^(http|https):\/\//,
  },
  type: {
    type: String,
    required: [true, "Type is required!"],
    enum: [
      "Supervolcanoes",
      "Submarine",
      "Subglacial",
      "Mud",
      "Stratovolcanoes",
      "Shield",
    ],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minlength: 10,
  },
  owner: {
    type: Types.ObjectId,
    ref: 'User',
  },
  votes: [{
    type: Types.ObjectId,
    ref: 'User',
  }]
});

const Volcano = model("Volcano", volcanoSchema);

export default Volcano;