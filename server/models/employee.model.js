import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: 'first name is required'
    },
    lastName: {
        type: String,
        required: 'last name is required'
    },
    picture: {
        type: String,
        required: 'picture is required'
    }
});