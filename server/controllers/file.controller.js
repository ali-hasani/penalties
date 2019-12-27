import mongoose from 'mongoose';
import { FileSchema } from '../models/file.model';
import { PenaltySchema } from '../models/penalty.model';

const File = mongoose.model('File', FileSchema);
const Penalty = mongoose.model('Penalty', PenaltySchema);

export const addNewFile = function (req, res) {


    const file = new File({
        _id: mongoose.Types.ObjectId(),
        date: req.body.date,
    });


    const penalties = [];
    req.body.penalties.forEach(p => {
        penalties.push({
            value: p.value,
            paid: p.paid,
            paymentDate: file.date,
            employee: p.employee._id,
            file: file._id
        });
    });

    Penalty.insertMany(penalties, function (err, dbPenalties) {
        if (err) return handleError(err);

        dbPenalties.forEach(p => {
            file.penalties.push(p);
        });

        file.save((err, dbFile) => {
            if (err) return handleError(err);

            res.send({ _id: dbFile._id, date: dbFile.date, penalties: dbPenalties });
        });
    });
};

export const getAllFiles = function (req, res) {
    File.find({})
        .populate({
            path: 'penalties',
            populate: { path: 'employee' }
        })
        .exec(function (err, files) {
            if (err) return handleError(err);

            res.json(files);
        });
};

export const getFileById = function (req, res) {
    File.findById(req.params.fileId)
        .populate({
            path: 'penalties',
            populate: { path: 'employee' }
        })
        .exec(function (err, file) {
            if (err) return handleError(err);

            res.json(file);
        });
};

export const updateFile = function (req, res) {
    const ids = [];
    req.body.penalties.forEach(p => {
        ids.push(p._id);
    });

    Penalty.deleteMany({ "_id": { "$in": ids } }, (err) => {
        if (err) return handleError(err);
    });

    const penalties = [];
    req.body.penalties.forEach(p => {
        penalties.push({
            value: p.value,
            paid: p.paid,
            paymentDate: req.body.date,
            employee: p.employee._id,
            file: req.body._id
        });
    });

    Penalty.insertMany(penalties, function (err, dbPenalties) {
        if (err) return handleError(err);

        const ps = [];
        dbPenalties.forEach(p => {
            ps.push(p);
        });

        File.findOneAndUpdate({ _id: req.body._id }, { penalties: ps }, (err, dbFile) => {
            if (err) res.send(err);

            res.send({ _id: dbFile._id, date: dbFile.date, penalties: dbPenalties });
        });
    });
};

export const deleteFile = function (req, res) {
    /**
    * not implemented
    */
};
