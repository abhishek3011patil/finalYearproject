const mongoose = require("mongoose");

const ContactQuerySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    email: {
      type: String,
      required: [true, "Please enter email"],
    },

    comment: {
      type: String,
      required: [true, "Please enter comment"],
    },

    
  },
  {
    timestamps: true,
  }
);


const ContactQuery = mongoose.model("ContactQuery", ContactQuerySchema);

module.exports = ContactQuery;