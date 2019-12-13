import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PenaltySchema = new Schema({
    value: {
        type: Number,
        required: 'value is required'
    },
    paymentDate: {
        type: Date,
        required: 'paymentDate is required',
        default: Date.now()
    },
    employeeId: {
        type: String,
        required: 'employeeId is required'
    },
    fileId: {
        type: String,
        required: 'fileId is required'
    }
}); 