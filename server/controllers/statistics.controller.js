import mongoose from 'mongoose';
import { FileSchema } from '../models/file.model';
import { PenaltySchema } from '../models/penalty.model';
import * as L from 'lodash';

const File = mongoose.model('File', FileSchema);
const Penalty = mongoose.model('Penalty', PenaltySchema);

export const totallPaindAmount = function (req, res) {
    Penalty.find({ paid: true }, (err, penalties) => {
        if (err) res.send(err);


        const allValues = L.flatMapDeep(penalties, p => p.value);
        const sum = L.sum(allValues);
        res.json(sum);
    });
};

export const totallDeptToFund = function (req, res) { 
    Penalty.find({ paid: false }, (err, penalties) => {
        if (err) res.send(err);


        const allValues = L.flatMapDeep(penalties, p => p.value);
        const sum = L.sum(allValues);
        res.json(sum);
    });
};
