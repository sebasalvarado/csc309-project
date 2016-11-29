'use strict';

exports.auth_user = function (req, res) {
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true });
};
//# sourceMappingURL=routes.js.map
