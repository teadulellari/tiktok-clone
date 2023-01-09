import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import path from "path";
import { fileURLToPath } from "url";
import videos from "./dbModel.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

//app config
const app = express();
const port = 9000;

const app = express();
const port = 9000;

//DB config

const connection_url =
  "mongodb+srv://teadule:CS8ooGFbiFHQTWje@cluster0.05mrrr8.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});




//api endpoints
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/v1/posts", (req, res) => {
  res.status(200).send(data);
});

app.get("/v2/posts", (req, res) => {
  videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//add data to the database
app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listener
app.listen(port, () => console.log(`listening on localhost : ${port}`));
