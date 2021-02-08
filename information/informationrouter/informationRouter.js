const router = require("express").Router();

const Information = require("./informationRouter");

router.get("/", (req, res) => {
  Information.find()
    .then((information) => {
      res.status(200).json(information);
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
