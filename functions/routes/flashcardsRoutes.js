const express = require('express');
const router = express.Router();
const flashcardsController = require('../controllers/flashcardsController');
const { auth } = require('../utils/auth');
const { validateFlashcard } = require('../utils/validators');

// GET all flashcards for a user
router.get('/', auth, flashcardsController.getAllFlashcards);

// GET details of a single flashcard for a user
router.get('/:flashcardId', auth, flashcardsController.getFlashcardById);

// CREATE a new flashcard for a user
router.post('/', [auth, validateFlashcard], flashcardsController.createFlashcard);

// UPDATE an existing flashcard for a user
router.put('/:flashcardId', [auth, validateFlashcard], flashcardsController.updateFlashcard);

// DELETE an existing flashcard for a user
router.delete('/:flashcardId', auth, flashcardsController.deleteFlashcard);

module.exports = router;
