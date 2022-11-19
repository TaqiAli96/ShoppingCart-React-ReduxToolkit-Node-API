const express = require("express");
const cors = require("cors");
const products = require("./Products");

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => console.log(`Dolphin app listening on port ${port}!`));
