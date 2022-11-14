const router = require("express").Router();
const { ConnectionTimedOutError } = require("sequelize");
const { Post, Comment, User } = require("../models");

// get all Blogs for homepage

router.get("/", (req, res) => {
  console.log("==================get/===================");
  Post.findAll({
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
      const posts = dbdata.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single blog
router.get("/post/:id", (req, res) => {
  console.log("==================get/post/:id===================");
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
    const posts = dbdata.get({ plain: true });
    console.log(posts);
    res.render("single-post", { posts, loggedIn: req.session.loggedIn });
  });
});

router.get("/login", (req, res) => {
  console.log("==================/login=================");
  if (req.session.logged) {
    console.log("already loggedin, redirecting to /");
    res.redirect("/");
    return;
  }
  console.log("not loggedin go to login page");
  res.render("login");
});

router.get("/signup", (req, res) => {
  console.log("===================/signup====================");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  res.render("signup");
});

module.exports = router;
