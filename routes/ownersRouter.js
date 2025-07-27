const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");
require("dotenv").config();

router.get("/", (req, res) => {
  res.send("its working");
});

if (process.env.NODE_ENV == "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      res.status(503).send("You dont have permission to create a new owner");
    }

    let { fullname, email, password } = req.body;
    let ownercreated = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(ownercreated);
  });
}

router.get("/admin",function(req,res){
    res.render("createproducts")
})

module.exports = router;
