const router = require("express").Router();
const WalletController = require("../controllers/wallet.controller");

router.post("/debit", WalletController.debit);
router.post("/credit", WalletController.credit);
router.get("/balance/:riderId", WalletController.balance);

module.exports = router;
