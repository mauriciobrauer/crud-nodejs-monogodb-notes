const { Router } = require("express");
const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

const { isAuthenticated } = require("../helpers/auth");

// new note
router.get("/notes/new-note", isAuthenticated, renderNoteForm);
router.post("/notes/new-note", isAuthenticated, createNewNote);

//get notes
router.get("/notes", isAuthenticated, renderNotes);

//Edit Notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);
router.put("/notes/edit/:id", isAuthenticated, updateNote);

//Delete Note
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;
