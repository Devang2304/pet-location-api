const mongoose = require('mongoose');

const LocationSchema=mongoose.Schema({
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
    });
    

    module.exports = mongoose.model('Posts',LocationSchema);
