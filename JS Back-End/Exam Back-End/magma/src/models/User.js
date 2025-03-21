import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minlength: 2,
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minlength: 10,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minlength: 4,
    }
});

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);
    this.password = hash;
});

const User = model("User", userSchema);

export default User;