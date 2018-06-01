'use strict';
module.exports = function () {
    return function (req, res, next) {
        var locale = req.cookies && req.cookies.locale;
        //Set the locality for this response. The template will pick the appropriate bundle
        console.log('locale11', locale);
        res.locals.context = {
            locality: locale
        };
        next();
    };
};
