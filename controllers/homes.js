const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const data = await mongodb.getDatabase().db('realtors').collection('homes').find();
  data.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  try {
    const realtorId = new ObjectId(req.params.id);
    const data = await mongodb
      .getDatabase()
      .db('realtors')
      .collection('homes')
      .find({ _id: realtorId });
   data.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  }catch(e) {
    res.status(500).json(response.error || 'Error occured while retrieving home.');
  }
  
};

const createHome = async (req, res) => {
  try {
    const home = {
        sellerFirstName: req.body.sellerFirstName,
        sellerLastName: req.body.sellerLastName,
        address: req.body.address,
        realtorName: req.body.realtorName,
        realtorPhone: req.body.realtorPhone
    };
    if (req.body.sellerFirstName != null && req.body.sellerLastName != null && req.body.address != null && req.body.realtorName != null && req.body.realtorPhone != null) {
      const response = await mongodb.getDatabase().db('realtors').collection('homes').insertOne(home);
      if (response.acknowledged ) {
        res.status(201).json(response);
      } else {
        res.status(500).json(response.error || 'Error occured while creating home. Please check your input and try again.');
      }
    }else {
      res.status(500).json('Error occured while creating home. Please check your input and try again.');
    }
   
  }catch(e) {
    res.status(500).json('Error occured while creating home. Please check your input and try again.');
  }
  
  
};

const updateHome = async (req, res) => {
  try {
    const ID = new ObjectId(req.params.id);
    const home = {
      sellerFirstName: req.body.sellerFirstName,
      sellerLastName: req.body.sellerLastName,
      address: req.body.address,
      realtorName: req.body.realtorName,
      realtorPhone: req.body.realtorPhone
    };
    const response = await mongodb
      .getDatabase()
      .db('realtors')
      .collection('homes')
      .replaceOne({ _id: ID }, home);
    console.log(response);
    response.modifiedCount > 0 ? res.status(204).send(): res.status(500).json(response.error || 'Error occurred while updating the home.');
  }catch(e) {
    res.status(500).json(response.error || 'Error occurred while updating the home.');
  }
  
  
};

const deleteHome = async (req, res) => {
  try {
    const ID = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db('realtors').collection('homes').deleteOne({ _id: ID }, true);
    console.log(response);
   response.deletedCount > 0 ? res.status(200).send(): res.status(500).json(response.error || 'Error occurred while deleting the home.');
  }catch(e) {
  }
  res.status(500).json(response.error || 'Error occurred while deleting the home.');
 
};

module.exports = {
  getAll,
  getSingle,
  createHome,
  deleteHome,
  updateHome
};