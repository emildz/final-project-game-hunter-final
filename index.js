const express = require("express");
const cors = require("cors");
const app = express();
const { createUser } = require("./src/users");
const { createSport, getAllSports, getSportsById } = require("./src/sports");


app.use(cors());
app.use(express.json());

app.post("/newusers", createUser);

app.post("/newgame", createSport)
app.get("/sport", getAllSports)
app.get("/sport/:sportId", getSportsById)

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
