import { get } from "mongoose";
import Tech from "../models/Tech.js";

const techService = {
  async createTech(data) {
    return await Tech.create(data);
  },
  async getAllTech() {
    return await Tech.find().lean();
  },
  async getLastThreeTech() {
    return await Tech.find().sort({ createdAt: -1 }).limit(3).lean();
  },
  async getTechById(techId) {
    return await Tech.findById(techId).lean();
  },
  async isOwner(techId, userId) {
    const tech = await Tech.findById(techId);
    return tech.owner == userId;
  },
  async isPreferred(techId, userId) {
    const tech = await Tech.findById(techId);
    return tech.preferredList.map((x) => x.toString()).includes(userId);
  },
  async prefer(techId, userId) {
    const tech = await Tech.findById(techId);
    tech.preferredList.push(userId);
    return await tech.save();
  },
  async edit(techId, data) {
    return await Tech.findByIdAndUpdate(techId, data, { runValidators: true });
  },
  async delete(techId) {
    return await Tech.findByIdAndDelete(techId);
  },
  async getMyPreferred(userId) {
    return await Tech.find({ preferredList: userId }).lean();
  },
  async getMyTech(userId) {
    return await Tech.find({ owner: userId }).lean();
  },
};

export default techService;
