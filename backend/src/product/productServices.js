const { CURSOR_FLAGS } = require("mongodb");
const jwt = require("jsonwebtoken");
var tableModel = require("./productModel");

module.exports.getDataFromDBService = () => {
  return new Promise((resolve, reject) => {
    tableModel
      .find({})
      .then((result) => resolve(result))
      .catch((error) => reject(false));
  });
};
module.exports.getTableDBService = (id) => {
  return new Promise((resolve, reject) => {
    tableModel
      .findById(id)
      .then((result) => resolve(result))
      .catch((error) => {
        console.log("Error caused whie fetching :id " + error);
      });
  });
};

module.exports.createTableDBService = (tableDetails) => {
  return new Promise((resolve, reject) => {
    var tableModelData = new tableModel();
    tableModelData.name = tableDetails.name;
    tableModelData.description = tableDetails.description;
    tableModelData.category = tableDetails.category;
    tableModelData.price = tableDetails.price;
    tableModelData.stock = tableDetails.stock;
    tableModelData.review = tableDetails.review;

    tableModelData
      .save()
      .then((result) => resolve(true))
      .catch((error) => reject(false));
  });
};

module.exports.updateTableDBService = (id, tableDetails) => {
  return new Promise((resolve, reject) => {
    tableModel
      .findByIdAndUpdate(id, tableDetails)
      .then((result) => resolve(result))
      .catch((error) => reject(false));
  });
};

module.exports.removeTableDBService = (id) => {
  return new Promise((resolve, reject) => {
    tableModel
      .findByIdAndDelete(id)
      .then((result) => resolve(result))
      .catch((error) => reject(false));
  });
};
