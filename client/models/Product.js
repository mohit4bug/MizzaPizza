import mongoose from "mongoose";

const schema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        maxLength: 60
    },
    desc: {
        type: String,
        required: true,
        maxLength: 200
    },
    img: {
        type: String,
        required: true,
    },
    newPrices: {
        type: [Number],
        required: true,
    },
    oldPrices: {
        type: [Number],
        required: true,
    },
    extras: [
        {
            text: String,
            price: {
                type: Number,
                required: true,
            }
        }
    ]
}, { timestamps: true });



export default mongoose.models.pizza || mongoose.model("pizza", schema);