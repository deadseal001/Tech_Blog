const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  Post.create({ ...body, userId: req.session.userId })
    .then((newPost) => {
      res.json(newPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  console.log(req.body);
  Post.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbdata) => {
      if (!dbdata) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbdata);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console(req.body);
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbdata) => {
      if (!dbdata) {
        res.status(400).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbdata);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
