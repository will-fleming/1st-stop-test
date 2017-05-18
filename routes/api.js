const express = require('express');
const router = express.Router();
const rawJsonController = require('../controllers/rawJson');

router.route('/').get((req, res) => {
  res.status(200).send({status: 'OK'});
});

router.route('/files')
  .get(rawJsonController.getAllRawJsonFiles);

module.exports = router;