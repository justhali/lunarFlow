const express = require('express');
const router = express.Router();

const phaseController = require('../../controllers/phaseController');



router.get('/phases', phaseController.getPhases)
router.get('/phases/:id', phaseController.getPhase)
router.put('/phases/:id', phaseController.updatePhase)
router.delete('/phases/:id', phaseController.deletePhase)
router.post('/phases', phaseController.addPhase)

module.exports = router;