const express = require("express");
const {
   addNewResource,
   getAllResources,
} = require("../controllers/resourceController");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();
router.post("/resources", [[isAuthenticated]], addNewResource);
router.get("/resources", getAllResources);
module.exports = router;
