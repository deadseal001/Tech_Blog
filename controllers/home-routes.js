const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// get all Blogs for homepage

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((dbdata) => {
      const blogs = dbdata.map((post) => post.get({ plain: true }));
      res.render("all-post", { blogs });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single blog
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
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
  }).then((dbdata) => {
    if (!dbdata) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    const blog = dbdata.get({ plain: true });
    res.render("single-post", { post, loggedIn: req.session.loggedIn });
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
