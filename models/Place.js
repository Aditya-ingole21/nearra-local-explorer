const  mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PlaceSchema = new Schema({

    name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 1000,
  },
  address: {
    type: String,
    required: true,
  },
  coordinates: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  
  tags: [String], 
  images: [String],
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  votes: {
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Place', PlaceSchema);
