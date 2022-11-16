const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  Post.findAll({
    where: {
      user_id: req.session.userId,
    },
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbdata) => {
      const posts = dbdata.map((post) => post.get({ plain: true }));
      console.log(posts);
      res.render("dashboard", {
        posts,
        loggedIn: true,
        userID: req.session.userId,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err).redirect("/login");
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
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
  })
    .then((dbdata) => {
      if (dbdata) {
        const post = dbdata.get({ plain: true });
        console.log(post);
        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).jaon(err).redirect("/");
    });
});

module.exports = router;
