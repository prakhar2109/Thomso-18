var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../../config/ca/admin_passport')(passport)

var Users = require('../../../models/ca/FB_User');

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

/* GET ALL Users */
router.get('/participants', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Users.find(function (err, allUsers) {
      if (err) return next(err);
      res.json(allUsers);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

module.exports = router;