const express = require('express');
const router = express.Router();

const moodController = require('../../controllers/moodController');



router.get('/moods', moodController.getMoods)
router.get('/moods/:id', moodController.getMood)
router.put('/moods/:id', moodController.updateMood)
router.delete('/moods/:id', moodController.deleteMood)
router.post('/moods', moodController.addMood)

module.exports = router;