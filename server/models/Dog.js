const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  createdData: {
    type: Date,
    default: Date.now,
  },
});

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOneAndUpdate(search, { $inc: { age: 1 } }, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
