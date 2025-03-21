import jwt from "../lib/jwt.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const authService = {
  async register(name, email, password, rePassword) {
    const user = await User.findOne({ $or: [{ name }, { email }] });

    if (user) {
      throw new Error("The given name or email already exists!");
    }

    if (password !== rePassword) {
      throw new Error("Passwords do not match!");
    }

    const newUser = await User.create({ name, email, password });

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
      name: user.name,
    };

    const header = {expiresIn: "2h"};
    const token = await jwt.sign(payload, process.env.JWT_SECRET, header);

    return token;
  },
};

export default authService;
