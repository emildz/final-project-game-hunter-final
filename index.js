const express = require("express");
const cors = require("cors");
const app = express();
const { createUser } = require("./src/users");
const { createSport, getAllSports, getSportsById } = require("./src/sports");


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000


// app.post("/newusers", createUser);

app.post("/newgame", createSport)
app.get("/sports", getAllSports)
app.get("/sports/:sportId", getSportsById)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
