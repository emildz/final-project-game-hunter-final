const { connectDb } = require("../connectDb");

exports.createUser = (req, res) => {
  if (!req.body.fname || !req.body.email) {
    res.status(401).send({ message: "Invalid Request" });
    return;
  }
  const db = connectDb();
  db.collection("users")
    .add(req.body)
    .then((docRef) => res.status(201).send({ id: docRef.id }))
    .catch((err) => {
      res.status(500).send(err);
    });
};
