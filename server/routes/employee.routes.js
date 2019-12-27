import {
    addNewEmployee,
    getEmployees,
    updateEmployee,
    getEmployeeById,
    deleteEmployee,
    filterEmployees
} from '../controllers/employee.controller';

const employeeRoutes = function (app) {
    app.route('/employee')
        .get(getEmployees)
        .post(addNewEmployee);

    app.route('/employee/:employeeId')
        .get(getEmployeeById)
        .put(updateEmployee)
        .delete(deleteEmployee);
};

export default employeeRoutes;