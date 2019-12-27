import {
    totallPaindAmount,
    totallDeptToFund
} from '../controllers/statistics.controller';

const statisticsRoutes = function (app) {
    app.route('/statistics/totallPaindAmount')
        .get(totallPaindAmount);

    app.route('/statistics/totallDeptToFund')
        .get(totallDeptToFund);
};

export default statisticsRoutes;