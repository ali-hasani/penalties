import {
    addNewPenalty,
    getAllPenalties,
    updatePenalty,
    getPenaltyById,
    deletePenalty
} from '../controllers/penalty.controller';

const penaltyRoutes = function (app) {
    app.route('/penalty')
        .get(getAllPenalties)
        .post(addNewPenalty);

    app.route('/penalty/:penaltyId')
        .get(getPenaltyById)
        .put(updatePenalty)
        .delete(deletePenalty);
};

export default penaltyRoutes;