import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

export const FileSchema = new Schema({
    date: {
        type: String,
        required: 'date is required'
    },
    createDate: {
        type: String,
        default: moment().format('YYYY-MM-DDTh:mm:ss')
    },
    penalties: [{
        type: Schema.Types.ObjectId,
        ref: 'Penalty',
    }]
});