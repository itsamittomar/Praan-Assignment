const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
  device_id: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  windspeed: {
    type: String,
    required: true
  },
  wind_direction: {
    type: String,
    required: true
  },
  p1: {
    type: String,
    required: true
  },
  p25: {
    type: String,
    required: true
  },
  p10: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('DeviceSchema', DeviceSchema);
