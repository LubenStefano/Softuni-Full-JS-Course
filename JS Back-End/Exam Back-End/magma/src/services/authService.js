import jwt from "../lib/jwt.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const authService = {
  async register(username, email, password, rePassword) {
    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (user) {
      throw new Error("The given username or email already exists!");
    }

    if (password !== rePassword) {
      throw new Error("Passwords do not match!");
    }

    const newUser = await User.create({ username, email, password });

    return this.generateToken(newUser);
  },
  async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("The email or password is not valid!");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("The email or password is not valid!");
    }

    return this.generateToken(user);
  },
  async generateToken(user) {
    const payload = {
      _id: user._id,
      email: user.email,
      username: user.username,
    };

    const header = {expiresIn: "2h"};
    const token = await jwt.sign(payload, process.env.JWT_SECRET, header);

    return token;
  },
};

export default authService;
