import mongoose from 'mongoose';
const { Schema } = mongoose;

const photoSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Photo = mongoose.model('Photo', photoSchema);

export default Photo;
