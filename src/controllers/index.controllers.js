const Note = require("../models/Note");
const indexCtrl = {};

indexCtrl.renderIndex = async (req, res) => {
  const notes = await Note.find();
  console.log(notes);
  res.render("index");
};

indexCtrl.renderAbout = (req, res) => {
  res.render("about");
};

module.exports = indexCtrl;
