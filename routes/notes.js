const { postNotes, deleteNotes, getNotes, editNotes } = require('../controllers/notesControllers.js')
const express = require('express');
const app = express();
const router = express.Router();

router.post('/', postNotes);
router.get('/:id', getNotes);
router.delete('/:id', deleteNotes);
router.put('/:id', editNotes)


module.exports = router;