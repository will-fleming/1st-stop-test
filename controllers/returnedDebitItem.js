const returnedDebitItemDoc = require('../models/returnedDebitItem');

function getAllReturnedDebitItems (req, res) {
  returnedDebitItemDoc.find({}, function (error, ReturnedDebitItems) {
    if (error) return res.status(500).send({error});
    res.status(200).send({ReturnedDebitItems});
  });
}

function addReturnedDebitItem (req, res) {
  const newFile = new returnedDebitItemDoc({
    ReturnedDebitItem: req.body.ReturnedDebitItem
  });
  newFile.save(error => {
    if (error) {
      console.log(error);
      return res.status(500).send({error});
    }
    res.status(201).send({
      ReturnedDebitItem: newFile
    });
  });
}

module.exports = {
  getAllReturnedDebitItems,
  addReturnedDebitItem
};