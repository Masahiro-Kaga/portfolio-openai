const dotenv = require('dotenv');
dotenv.config({ path: '../.env'});
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
connectDB();
const User = require('./models/user');
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());

app.get("/getTest", (req,res) => {
  console.log("Get Test Request");
  res.json({message:"Hello Get test"});
});

app.post("/postTest", (req,res) => {
  console.log("Post Test Request");
  console.log(req.body);
  const user = new User({
    username: req.body.username
  });
  user.save();
  res.json("Post Test");
});

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
