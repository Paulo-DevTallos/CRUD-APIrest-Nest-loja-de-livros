import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
    id: Number,
    cod: String,
    item: String,
    name: String,
    price: Number,
})