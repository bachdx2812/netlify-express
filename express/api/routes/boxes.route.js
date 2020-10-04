const express = require('express');
const controller = require('../controllers/boxes.controller');

const router = express.Router();

router.route('/').get(controller.getBoxes);
router.route('/:boxCode')
  .get(controller.getBoxByCode)
  .post(controller.postBox);
router.route('/visits').patch(controller.updateWaitOrderPriority);

module.exports = router;
