const express = require('express');
const controller = require('../controllers/auth.controller');

const router = express.Router();

router.route('/')
  .post(controller.login)
  .delete(controller.logout);

module.exports = router;
