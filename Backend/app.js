const router = require("./routes/main");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const DB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";
const app = express();

dotenv.config();

app.use(express.json());
app.use("/", router);

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() =>
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    })
  )
  .catch((err) => console.log(`Error ${err}`));