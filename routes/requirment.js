const express = require("express");
const {
   addNewRequirment,
   getAllRequirements,
} = require("../controllers/requirmentController");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();
router.post("/requirements", [isAuthenticated], addNewRequirment);
router.get("/requirements", getAllRequirements);
module.exports = router;
