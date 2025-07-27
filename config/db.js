const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectedDb = async function() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = {
  connectedDb,
};