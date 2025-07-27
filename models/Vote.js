const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['upvote', 'downvote'],
    required: true,
  },
  votedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Vote', VoteSchema);
