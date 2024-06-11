const ContactQuery = require("../models/contactQueries.model");

const getContactQueries = async (req, res) => {
  try {
    
    const contactQuery = await ContactQuery.find({});
    res.status(200).json(contactQuery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getContactQuery = async (req, res) => {
  try {
    const { id } = req.params;
    const contactQuery = await ContactQuery.findById(id);
    res.status(200).json(contactQuery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createContactQuery = async (req, res) => {
  try {
    
    const contactQuery = await ContactQuery.create(req.body);
    res.status(200).json(contactQuery);
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

const updateContactQuery = async (req, res) => {
  try {
    const { id } = req.params;

    const contactQuery = await ContactQuery.findByIdAndUpdate(id, req.body);

    if (!contactQuery) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedContactQuery = await ContactQuery.findById(id);
    res.status(200).json(updatedContactQuery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContactQuery = async (req, res) => {
  try {
    const { id } = req.params;

    const contactQuery = await ContactQuery.findByIdAndDelete(id);

    if (!contactQuery) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getContactQueries,
  getContactQuery,
  createContactQuery,
  updateContactQuery,
  deleteContactQuery,
};