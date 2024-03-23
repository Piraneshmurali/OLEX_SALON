var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ImageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
      default:"0"
      
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", ProductSchema);
