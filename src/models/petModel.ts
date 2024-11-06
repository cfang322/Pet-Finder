import mongoose from "mongoose";

const petSchema = new mnongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    status: { type: String, default: 'available' }
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet;