const { Router } = require('express');
const router = Router();
const countryRoute = require('../controllers/countryControllers');
const activityRoute = require('../controllers/activityControllers');

router.use('/countries', countryRoute)
router.use('/activities', activityRoute)

module.exports = router;
