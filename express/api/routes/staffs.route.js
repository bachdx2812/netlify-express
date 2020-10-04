const express = require('express');
const controller = require('../controllers/staffs.controller');

const router = express.Router();

router.route('/').get(controller.getStaffs);
router.route('/:staffCode').get(controller.getStaffByCode);

module.exports = router;
