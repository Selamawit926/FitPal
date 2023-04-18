const express = require("express");


// Mongoose
const mongoose = require("mongoose");
// Dotenv
const dotenv = require("dotenv")

dotenv.config();

const DB_URI = process.env.MONGO_URI ;

const challengeRouter = require("./routes/challenge");
const userRouter = require("./routes/user");
const foodRouter = require("./routes/food");


const app = express();

dotenv.config();

app.use(express.json());

app.use("/api/v1/challenge", challengeRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/food", foodRouter);

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  })
  .then(() =>
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    })
  )
  .catch((err) => console.log(`Error ${err}`));