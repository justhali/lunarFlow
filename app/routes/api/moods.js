const express = require('express');
const router = express.Router();

const moodController = require('../../controllers/moodController');



router.get('/moods', moodController.getMoods)
router.get('/mood/:id', moodController.getMood)
router.put('/mood/:id', moodController.updateMood)
router.delete('/mood/:id', moodController.deleteMood)
router.post('/mood', moodController.addMood)

module.exports = router;