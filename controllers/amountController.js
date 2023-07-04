const { Amount: AmountModel } = require("../models/Amount");

const amountController = {
  create: async (req, res) => {
    try {
      const newAmount = {
        title: req.body.title,
        value: req.body.value,
        outcome: req.body.outcome,
      };

      const response = await AmountModel.create(newAmount);

      res.status(201).json({ response, msg: "Finança criada com sucesso" });
    } catch (error) {
      console.log("Error", error);
    }
  },
  getAll: async (req, res) => {
    try {
      const amount = await AmountModel.find();

      res.status(200).json({ amount });
    } catch (error) {
      console.log("Error", error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const id = req.body;
      const amountId = await AmountModel.findById(id);

      if (!amountId) {
        res.json({ message: "Amount not found" });
        return;
      }
      const deletedAmount = await AmountModel.findByIdAndDelete(id);

      res.json({ deletedAmount, message: "Amount deleted" });
    } catch (err) {
      console.log("Error", err);
    }
  },
};

module.exports = amountController;
