const rawJsonDoc = require('../models/rawJson');

function getAllRawJsonFiles (req, res) {
  rawJsonDoc.find({}, function (error, files) {
    if (error) return res.status(500).send({error});
    res.status(200).send({files});
  });
}

function addRawJsonFile (req, res) {
  const newFile = new rawJsonDoc({
    BACSDocument: req.body.BACSDocument
  });
  newFile.save(error => {
    if (error) return res.status(500).send({error});
    res.status(201).send({
      file: newFile
    });
  });
}

module.exports = {
  getAllRawJsonFiles,
  addRawJsonFile
};