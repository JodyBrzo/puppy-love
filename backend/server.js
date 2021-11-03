const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require("./routes");

require('dotenv-flow').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.DBHOST;
console.log ("atlas connection:---- " + uri);
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(routes);

module.exports = app.listen (port, () => {
    console.log(`listening on port: ${port}`);
});

module.exports = app;