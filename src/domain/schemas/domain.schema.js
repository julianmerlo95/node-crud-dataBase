const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    default: '0',
    required: true
  },
  name: {
    type: String,
    default: 'nombre default',
    required: true
  },
  lastName: {
    type: String,
    default: 'apellido default',
    required: true
  },
  email: {
    type: String,
    default: 'email default',
    required: true
  }
});


module.exports = mongoose.model('user', userSchema);