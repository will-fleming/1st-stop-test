const rawJsonDoc = require('../models/rawJson');

function getAllRawJsonFiles (req, res) {
  rawJsonDoc.find({}, function (error, files) {
    if (error) return res.status(500).send({error});
    res.status(200).send({files});
  });
}

module.exports = {
  getAllRawJsonFiles
};