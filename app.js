require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT;

// Setting Frontend (React JS) as a static file
app.use(express.static(path.join(__dirname, "./public/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
