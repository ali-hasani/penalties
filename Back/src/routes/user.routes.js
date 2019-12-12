import { addNewUser, getAllUsers, updateUser, getUserById, deleteUser } from '../controllers/user.controller';

const routes = function (app) {
    app.route('/user')
        .get(getAllUsers)
        .post(addNewUser);

    app.route('/user/:userId')
        .get(getUserById)
        .put(updateUser)
        .delete(deleteUser);
};

export default routes;