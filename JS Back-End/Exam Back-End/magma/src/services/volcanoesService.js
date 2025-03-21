import Volcano from "../models/Volcano.js";

const volcanoesService = {
    async create(data) {
        return await Volcano.create(data);
    },
    async getAll() {
        return await Volcano.find().lean();
    },
    async getOne(id) {
        return await Volcano.findById(id).lean();
    },
    async isOwner(volcanoId, userId) {
        const volcano = await Volcano.findById(volcanoId);
        if (!volcano) {
            return false;
        }
        return volcano.owner == userId;
    },
    async update(id, data) {
        return await Volcano.findByIdAndUpdate(id, data, { runValidators: true });
    },
    async delete(id) {
        return await Volcano.findByIdAndDelete(id);
    },
    async vote(id, userId) {
        const volcano = await Volcano.findById(id);
        if (!volcano) {
            throw new Error("Volcano not found!");
        }
        if (volcano.votes.includes(userId)) {
            throw new Error("You have already voted for this volcano!");
        }
        volcano.votes.push(userId);
        return await volcano.save();
    },
    async search(query) {
        const volcanoes = await this.getAll();
        return volcanoes.filter(v => v.name.toLowerCase().includes(query.toLowerCase()));
    }
}

export default volcanoesService;