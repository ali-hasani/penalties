import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PenaltySchema = new Schema({
    value: {
        type: Number,
        required: 'value is required'
    },
    paid: {
        type: Boolean,
        required: 'paid is required'
    },
    paymentDate: {
        type: String,
        required: 'paymentDate is required',
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    file: {
        type: Schema.Types.ObjectId,
        ref: 'File'
    }
});
