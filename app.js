const path = require("path");

const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const loginRoutes = require("./routes/login");
const queueRoutes = require("./routes/queue");
const submitRoutes = require("./routes/submit");
app.use(express.static(path.join(__dirname, "front-end")));

// parse incoming request bodies
//  to make the form data available under the req.body property
// use extended: true for complex form objects
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/login", loginRoutes);
app.use("/queue", queueRoutes);
app.use("/submit_order", submitRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "front-end", "404.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}...`);
});
