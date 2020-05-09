const mongoose = require("mongoose");

const { NOTES_APP_MONGODB_HOST, NODES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NODES_APP_MONGODB_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("Conectado a la base datos"))
  .catch((err) => console.log(err));
