"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/** Get the user
 * @returns {User}
 */
function get(req, res) {
  console.log("HIT");
  return res.send(200);
}

exports.default = { get: get };
module.exports = exports["default"];
//# sourceMappingURL=user.controller.js.map
