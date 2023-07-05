const router = require("express").Router()
const amountController = require("../controllers/amountController")

router
.route("/finances")
.post((req, res) => amountController.create(req, res));

router
.route("/finances")
.get((req, res) => amountController.getAll(req, res));

router
.route("/finances/:id")
.delete((req, res) => amountController.deleteById(req, res));


module.exports = router