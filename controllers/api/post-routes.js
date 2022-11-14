const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  console.log("-----------get all posts------------");
  Post.findAll({
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbdata) => res.json(dbdata))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log("-----------get single posts------------");
  Post.findAll({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
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
  console.log("-----------put /post/:id----------");
  console.log(req.body);
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
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
