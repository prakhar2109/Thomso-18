var express = require('express');
var router = express.Router();
var cors = require('cors');
var corsOptions = require('./config/cors');
// Routes
var caRoutes = require('./ca/routes');
var notificationRoutes = require('./notification/routes');
var zonalsRoutes = require('./zonals/routes');
var bookRoutes = require('./book/routes');

// Controllers
var viewController = require('../controllers/view_controller');
var verifyCerti = require('../controllers/api/Certificates/verifyCertificates');

// Routes

// -> /api
router.use('/api/ca', caRoutes);
router.use('/api/notification', notificationRoutes);
router.use('/api/book', bookRoutes);
router.use('/api/certiVerify', cors(corsOptions),  verifyCerti.certi_verify );
router.use('/api/zonals', zonalsRoutes);
// -> /*
router.get('/*', viewController);

module.exports = router;