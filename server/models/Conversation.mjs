import mongoose from 'mongoose';

const ConvertionSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Conversation', ConvertionSchema);
