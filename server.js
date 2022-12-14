const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection.js");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");

const sess = {
  secret: "Do your best",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  checkExpirationInterval: 10 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
  expiration: 4 * 60 * 60 * 1000,
};

app.use(session(sess));
const helpers = require("./utils/helpers"); //?

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on PORT" + PORT));
});
