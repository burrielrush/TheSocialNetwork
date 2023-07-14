const  Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    getAllThoughts: async (req, res) => {
        try {
            const thoughtData = await Thought.find()
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            res.json(thoughtData);
        } catch (err) {
            res.status(500).json({message: 'trouble finding all thoughts'});
        }
    },
            
    
    getThoughtById: async (req, res) =>{
        try {
            const singleThought = await Thought.findOne({_id: req.params.thoughtId});
            if (!singleThought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(singleThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
  createThought: async (req, res) =>{
        try {
            const { thoughtText, username } = req.body;
            const newThought = await Thought.create({ thoughtText, username, userId: req.params.userId });
             await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { thoughts: newThought._id } },
                { new: true }
            );

            res.json( {message: 'Thought created successfully!'});
        } catch (err) {
            res.status(500).json({message: req.params.userId});
        }
    },
   updateThought: async (req, res) => {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                {_id: req.params.userId},
                req.body,
                {new: true}
            );
            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(updatedThought);
        } catch (err) {
            res.status(500).json({message: req.params.userId});
        }
    },
    deleteThought: async (req, res) => {
        try {
            const deletedThought = await Thought.findOneAndDelete();
            if (!deletedThought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(deletedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    addReaction: async (req, res) =>{
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                {$push: {reactions: req.body}},
                {new: true}
            );
            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(updatedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteReaction: async (req, res) => {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {new: true}
            );
            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(updatedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

