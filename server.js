const express = require('express');
var bodyParser = require('body-parser');
const api = require("./routes/api");
const app = express();
const port = 3000;
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");


app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use("/api/v1", api);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
