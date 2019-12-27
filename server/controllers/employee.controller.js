import mongoose from 'mongoose';
import { EmployeeSchema } from '../models/employee.model';

const Employee = mongoose.model('Employee', EmployeeSchema);

export const addNewEmployee = function (req, res) {
    const newEmployee = new Employee(req.body);
    newEmployee.save((err, employee) => {
        if (err) {
            res.send(err);
        }
        res.send(employee);
    });
};

export const getEmployees = function (req, res) {
    if (req.query.filter) {
        let filter = req.query.filter;
        filter = filter.replace(/\s/g, '|');
        const re = new RegExp(`${filter}`, 'g');
        Employee.find({
            _id: { '$nin': req.query.except ? req.query.except.split(',') : [] },
            $or: [
                { firstName: re },
                { lastName: re },
            ]
        }, (err, employees) => {
            if (err) {
                res.send('err');
            }
            res.json(employees);
        });
    } else {
        Employee.find({}, (err, employees) => {
            if (err) {
                res.send('err');
            }

            res.json(employees);
        });
    }
};

export const getEmployeeById = function (req, res) {
    Employee.findById(req.params.employeeId, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
};

export const updateEmployee = function (req, res) {
    Employee.findByIdAndUpdate({ _id: req.params.employeeId }, req.body, { new: true }, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
};

export const deleteEmployee = function (req, res) {
    Employee.deleteOne({ _id: req.params.employeeId }, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(req.params.employeeId);
    });
};
