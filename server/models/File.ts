import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

const fileSchema = new Schema({
  fileName: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  sizeInBytes: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
  },
  receiver: {
    type: String,
  },
});

interface IFile extends Document {
  fileName: string;
  secureUrl: string;
  format: string;
  sizeInBytes: string;
  sender?: string;
  receiver?: string;
}

export default mongoose.model<IFile>("File", fileSchema);
