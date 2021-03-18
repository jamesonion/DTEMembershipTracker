const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { User } = require("./models/User");

exampleRouter = require('./routes/examples.server.routes');

// Use env port or default
const port = process.env.PORT || 8000;

//initialize app
const app = express();

//connect to db
mongoose.connect(process.env.DB_URI || require('./config/config').db.uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected");
});
connection.on("error", (error) => console.log("Error: " + error));

//morgan used for logging HTTP requests to the console
app.use(morgan("dev"));

//bodyParser middleware used for resolving the req and res body objects (urlEncoded and json formats)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add simple routes
app.use('http://localhost:5000/api/example', exampleRouter);

//start the server
app.listen(port, () => console.log(`Server now running on port ${port}!`));