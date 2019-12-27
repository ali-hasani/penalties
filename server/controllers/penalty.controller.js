import mongoose from 'mongoose';
import { PenaltySchema } from '../models/penalty.model';

const Penalty = mongoose.model('Penalty', PenaltySchema);

export const addNewPenalty = function (file, penalty) {
    const newPenalty = new Penalty({
        value: penalty.value,
        paymentDate: file.date,
        employeeId: penalty.employee._id,
        fileId: file._id
    });

    newPenalty.save((err, penalty) => {
        if (err) {
            return err;
        } else {
            return true;
        }
    });
};

export const getAllPenalties = function (req, res) {
    /**
    * not implemented
    */
};

export const getPenaltyById = function (req, res) {
    /**
    * not implemented
    */
};

export const updatePenalty = function (req, res) {
    /**
    * not implemented
    */
};

export const deletePenalty = function (req, res) {
    /**
    * not implemented
    */
}