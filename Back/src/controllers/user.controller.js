import mongoose from 'mongoose';
import { UserSchema } from '../models/user.model';
import { read } from 'fs';

const User = mongoose.model('User', UserSchema);

export const addNewUser = function (req, res) {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.send(user);
    });
};

export const getAllUsers = function (req, res) {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
};

export const getUserById = function (req, res) {
    User.findById(req.params.userid, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

export const updateUser = function (req, res) {
    User.findByIdAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

export const deleteUser = function (req, res) {
    User.deleteOne({ _id: req.params.userId }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(req.params.userId);
    });
}