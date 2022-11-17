const router = require("express").Router();
// const { ConnectionTimedOutError } = require("sequelize");
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
    const sameornot = (a, b) => {
      if (a === b) {
        return true;
      } else {
        return false;
      }
    };
    let same = sameornot(req.session.userId, posts.user_id);
    console.log(posts, same);
    res.render("single-post", {
      posts,
      loggedIn: req.session.loggedIn,
      userID: req.session.userId,
      sameuser: same,
    });
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

router.get("/create", (req, res) => {
  console.log("==============route.get/create==============st");
  if (!req.session.loggedIn) {
    res.redirect("/login");
  }
  res.render("newpost");
});
module.exports = router;
