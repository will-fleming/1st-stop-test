const express = require('express');
const router = express.Router();
const rawJsonController = require('../controllers/rawJson');
const returnedDebitItemController = require('../controllers/returnedDebitItem');

router.route('/').get((req, res) => {
  res.status(200).send({status: 'OK'});
});

router.route('/files')
  .get(rawJsonController.getAllRawJsonFiles)
  .post(rawJsonController.addRawJsonFile);

router.route('/returnedDebitItems')
  .get(returnedDebitItemController.getAllReturnedDebitItems)
  .post(returnedDebitItemController.addReturnedDebitItem);

module.exports = router;