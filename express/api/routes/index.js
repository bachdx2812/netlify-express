const express = require('express');
const authRoutes = require('./auth.route');
const staffsRoutes = require('./staffs.route');
const boxesRoutes = require('./boxes.route');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/staffs', staffsRoutes);
router.use('/boxes', boxesRoutes);

module.exports = router;
