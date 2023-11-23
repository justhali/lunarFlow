const Phase = require('../models/Phase');

class PhaseController {
    async getPhases(req, res){
        try {
            const phases = await Phase.find({});
            res.status(200).json(phases)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async getPhase(req, res){
        try {
            const {id} = req.params;
            const phase = await Phase.findById(id);
            res.status(200).json(phase)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async addPhase(req, res){
        const{ description, category } = req.body;
        try {
            const newPhase = new Phase({description, category});
            await newPhase.save()
            res.status(201).json({message : 'New phase successfully added'})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async updatePhase(req, res){
        try {
            const {id} = req.params;
            const phase = await Phase.findByIdAndUpdate(id, req.body);
            if(!phase){
                return res.status(404).json({message: `cannot find any Phase with this ID ${id}`})
            }
            const updatedPhase = await Phase.findById(id)
            res.status(200).json(updatedPhase);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async deletePhase(req, res){
        try {
            const {id} = req.params;
            const phase = await Phase.findByIdAndDelete(id);
            if(!phase){
                return res.status(404).json({message: `cannot find any phase with this ID ${id}`})
            }
            res.status(200).json({message : `This phase with this ${phase.id} is successfully deleted`});
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = new PhaseController();