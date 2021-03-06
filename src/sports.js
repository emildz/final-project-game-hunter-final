const { connectDb } = require("../connectDb");

exports.createSport = (req, res) => {
  const newGame = {
    name: req.body.name,
    sport: req.body.sport,
    playerCount: req.body.playerCount,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,

    // should follow database structure
  };
  const db = connectDb();
  db.collection("sports")
    .add(newGame)
    .then((docRef) => res.status(201).send({ id: docRef.id }))
    .catch((err) =>
      res.status(500).send({
        success: false,
        message: err.message,
        error: err,
      })
    );
};

exports.getAllSports = (req, res) => {
  const db = connectDb();
  db.collection("sports")
    .get()
    .then((collection) => {
      const sports = collection.docs.map((doc) => {
        let sport = doc.data();
        sport.id = doc.id;
        return sport;
      });
      res.send(sports);
    })
    .catch((err) => res.status(500).send(err));
};

exports.getSportsById = (req, res) => {
  const { sportId } = req.params;
  const db = connectDb();
  db.collection("sports")
    .doc(sportId)
    .get()
    .then((doc) => {
      let sport = doc.data();
      sport.id = doc.id;
      res.send(sport);
    })
    .catch((err) => res.status(500).send(err));
};
