
const ObjectId2 = require('mongodb').ObjectId;
const mongodb2 = require('../database/connect.tsx');
const getAll = async (req, res) => {
  const data = await mongodb2.getDatabase().db('realtors').collection('realtors').find();
  data.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  try {
   
    const realtorId = new ObjectId2(req.params.id);
    const data = await mongodb2
      .getDatabase()
      .db('realtors')
      .collection('realtors')
      .find({ _id: realtorId });
   data.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  }catch(e) {
    res.status(500).json( 'Error occured while retrieving realtor.');
  }
  
};

const createRealtor = async (req, res) => {
  try {
    const realtor = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    };
    if (req.body.firstName != null && req.body.lastName != null && req.body.email != null && req.body.phone != null && req.body.city != null && req.body.state != null && req.body.zip != null) {
      const response = await mongodb2.getDatabase().db('realtors').collection('realtors').insertOne(realtor);
      if (response.acknowledged ) {
        res.status(201).json(response);
      } else {
        res.status(500).json('Error occured while creating realtor. Please check your input and try again.');
      }
    }else {
      res.status(500).json('Error occured while creating realtor. Please check your input and try again.');
    }
   
  }catch(e) {
    res.status(500).json('Error occured while creating realtor. Please check your input and try again.');
  }
  
  
};

const updateRealtor = async (req, res) => {
  try {
    const ID = new ObjectId2(req.params.id);
    const realtor = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    };
    const response = await mongodb2
      .getDatabase()
      .db('realtors')
      .collection('realtors')
      .replaceOne({ _id: ID }, realtor);
  
    response.modifiedCount > 0 ? res.status(204).send(): res.status(500).json(response.error || 'Error occurred while updating the realtor.');
  }catch(e) {
    res.status(500).json('Error occurred while updating the realtor.');
  }
  
  
};

const deleteRealtor = async (req, res) => {
  try {
    const ID = new ObjectId2(req.params.id);
    const response = await mongodb2.getDatabase().db('realtors').collection('realtors').deleteOne({ _id: ID }, true);

   response.deletedCount > 0 ? res.status(200).send(): res.status(500).json(response.error || 'Error occurred while deleting the realtor.');
  }catch(e) {
  }
  res.status(500).json('Error occurred while deleting the realtor.');
 
};

module.exports = {
  getAll,
  getSingle,
  createRealtor,
  deleteRealtor,
  updateRealtor
};