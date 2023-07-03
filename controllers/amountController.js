const {Amount: AmountModel} = require("../models/Amount")

const amountController = {
  create: async (req, res) => {
    try {
      const newAmount = {
        title: req.body.title,
        value: req.body.value,
        outcome: req.body.outcome
      };

      const response = await AmountModel.create(newAmount)

      res.status(201).json({response, msg: "Finança criada com sucesso"})
    
    } catch (error) {
      console.log("Error", error)
    }
  },
  getAll: async (req, res) => {
    try {
      const amount = await AmountModel.find();
      
      res.status(200).json({ amount })
    } catch (error) {
      console.log("Error", error)
    }
  }

}

module.exports = amountController;