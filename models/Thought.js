const reactionSchema = require('./Reaction.js')
const mongoose = require('mongoose');
const { Schema } = mongoose;



const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (timestamp) {
      return new Date(timestamp).toLocaleString();
    }
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
}, { timestamps: true });

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
