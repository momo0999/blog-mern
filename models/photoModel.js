import mongoose from 'mongoose';
const { Schema } = mongoose;

const photoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
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
