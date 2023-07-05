const { Thought, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().populate;
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
        const updatedThought = await Thought.findOneAndUpdate(
            {_id: req.params.userId},
            req.body,
            {new: true}
        );
        if (!updatedThought) {
            return res.status(404).json({ message: 'No thought found!' });
        }
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json({message: req.params.userId});
    }
},
    
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id' });
      }

      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addLike(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { likes: req.body.userId } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeLike(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { likes: req.body.userId } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
