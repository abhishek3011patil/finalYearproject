const express = require("express");
//const ContactQueries = require("../models/contactQueries.model.js");
const router = express.Router();
const {getContactQueries, getContactQuery, createContactQuery, updateContactQuery, deleteContactQuery} = require('../controllers/contactQueries.controller.js');


router.get('/', getContactQueries);
router.get("/:id", getContactQuery);

router.post("/", createContactQuery);

// update a product
router.put("/:id", updateContactQuery);

// delete a product
router.delete("/:id", deleteContactQuery);




module.exports = router;