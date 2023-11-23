const Mood = require('../models/Mood');

class MoodController {
    async getMoods(req, res){
        try {
            const moods = await Mood.find({});
            res.status(200).json(moods)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async getMood(req, res){
        try {
            const {id} = req.params;
            const mood = await Mood.findById(id);
            res.status(200).json(mood)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async addMood(req, res){
        const{ img, category } = req.body;
        try {
            const newMood = new Mood({img, category});
            await newMood.save()
            res.status(201).json({message : 'New mood successfully added'})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async updateMood(req, res){
        try {
            const {id} = req.params;
            const mood = await Mood.findByIdAndUpdate(id, req.body);
            if(!mood){
                return res.status(404).json({message: `cannot find any mood with this ID ${id}`})
            }
            const updatedMood = await Mood.findById(id)
            res.status(200).json(updatedMood);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async deleteMood(req, res){
        try {
            const {id} = req.params;
            const mood = await Mood.findByIdAndDelete(id);
            if(!mood){
                return res.status(404).json({message: `cannot find any mood with this ID ${id}`})
            }
            res.status(200).json({message : `This mood with this ${mood.id} is successfully deleted`});
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = new MoodController();