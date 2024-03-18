var tableService = require("./productServices");

var getDataControllerfn = async (req, res) => {
  try {
    var tableData = await tableService.getDataFromDBService();
    res
      .status(200)
      .json({
        status: true,
        data: tableData,
        message: "Data retrieved successfully",
      });
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

var findTableController = async (req, res) => {
  try {
    var result = await tableService.getTableDBService(req.params.id);
    if (result) {
      res
        .status(200)
        .json({ status: true, data: result, message: "Table found" });
    } else {
      res.status(404).json({ status: false, message: "Table not found" });
    }
  } catch (error) {
    console.error("Error finding table:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

var createTableControllerFn = async (req, res) => {
  try {
    var status = await tableService.createTableDBService(req.body);
    if (status) {
      res
        .status(201)
        .json({ status: true, message: "Table created successfully" });
    } else {
      res
        .status(400)
        .json({ status: false, message: "Error creating table" });
    }
  } catch (error) {
    console.error("Error creating table:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

var updateTableController = async (req, res) => {
  try {
    var result = await tableService.updateTableDBService(
      req.params.id,
      req.body
    );
    if (result) {
      res
        .status(200)
        .json({ status: true, message: "Table updated successfully" });
    } else {
      res.status(404).json({ status: false, message: "Table not found" });
    }
  } catch (error) {
    console.error("Error updating table:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

var deleteTableController = async (req, res) => {
  try {
    var result = await tableService.removeTableDBService(req.params.id);
    if (result) {
      res
        .status(200)
        .json({ status: true, message: "Table deleted successfully" });
    } else {
      res.status(404).json({ status: false, message: "Table not found" });
    }
  } catch (error) {
    console.error("Error deleting table:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};


module.exports = {
  getDataControllerfn,
  createTableControllerFn,
  updateTableController,
  deleteTableController,
  findTableController,
};
