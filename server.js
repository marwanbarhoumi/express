const express = require("express");
const app = express();

const pageRouter = require("./routes/routes");

const date = new Date();

const Logger = function (req, res, next) {
  console.log("A new request received at " + date.getDay());

  next();
};

{
  if (date.getDay() == 6 || date.getDay() == 7) {
    app.get(["/", "/contactus", "/ourservices"], (req, res) => {
      res.redirect("Closed");
    });
  } else if (date.getHours() > 17 || date.getHours() < 9) {
    app.get(["/", "/contactus", "/ourservices"], (req, res) => {
      res.redirect("closed");
    });
  }
}

app.set("view engine", "ejs");
app.use("/", pageRouter);
app.use(Logger);

app.all("*", (req, res) => {
  res.status(404).render("Not found");
});

app.listen(3000);