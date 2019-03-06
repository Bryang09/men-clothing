const express = require("express");
const router = express.Router();

// CLOTHING MODEL
const Clothing = require("../../models/Cloting");

// GET api/clothing
router.get("/", (req, res) => {
  Clothing.find()
    .then(clothing => res.json(clothing))
    .catch(err => console.log(err));
});

// GET BY ID

router.get("/:id", (req, res) => {
  Clothing.findById(req.params.id)
    .then(clothing => {
      if (!clothing) {
        return res.status(400).end();
      }
      return res.status(200).json(clothing);
    })
    .catch(err => console.log(err));
});

// POST api/clothing
router.post("/", (req, res) => {
  const newClothing = new Clothing({
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
    type: req.body.type,
    style: req.body.style,
    location: req.body.location
  });
  newClothing.save().then(clothing => res.json(clothing));
});

module.exports = router;
