import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minlength: [2, 'Name must be at least 2 characters long!'],
        maxlength: [20, 'Name must be at most 20 characters long!'],
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minlength: [10, 'Email must be at least 10 characters long!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minlength: [4, 'Password must be at least 4 characters long!'],
    }
});

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

const User = model('User', userSchema);

export default User;