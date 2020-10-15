const express = require('express');
const router = express.Router();
const requireAuth =require('../middleware/authMiddleware');
const auth=requireAuth.requireAuth;
const dashboard = require('../controller/dashboard');

router.get('/',auth, dashboard.dashboardForm);
router.post('/',auth, dashboard.dashboardData);
 
 



 
 

module.exports = router;