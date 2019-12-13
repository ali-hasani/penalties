import { addNewEmployee, getAllEmployees, updateEmployee, getEmployeeById, deleteEmployee } from '../controllers/employee.controller';

const employeeRoutes = function (app) {
    app.route('/employee')
        .get(getAllEmployees)
        .post(addNewEmployee);

    app.route('/employee/:employeeId')
        .get(getEmployeeById)
        .put(updateEmployee)
        .delete(deleteEmployee);
};

export default employeeRoutes;