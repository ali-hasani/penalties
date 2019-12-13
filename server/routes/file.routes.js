import {
    addNewFile,
    getAllFiles,
    updateFile,
    getFileById,
    deleteFile
} from '../controllers/file.controller';

const fileRoutes = function (app) {
    app.route('/file')
        .get(getAllFiles)
        .post(addNewFile);

    app.route('/file/:fileId')
        .get(getFileById)
        .put(updateFile)
        .delete(deleteFile);
};

export default fileRoutes;