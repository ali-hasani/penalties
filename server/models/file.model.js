import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FileSchema = new Schema({
    date: {
        type: Date,
        required: 'date is required'
    },
    createDate: {
        type: Date,
        default: Date.now()
    }
});