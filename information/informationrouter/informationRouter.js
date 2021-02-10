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

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Information.findById(id)
    .then((information) => {
      if (information) {
        res.status(200).json(information);
      } else {
        res.status(404).json({ message: "Could not find that information" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.post("/:id", (req, res) => {
  const id = req.params.id;
  req.body.usersId = id;
  const info = req.body;

  Information.add(info)
    .then((newInfo) => {
      res.status(201).json({ newInfo });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
