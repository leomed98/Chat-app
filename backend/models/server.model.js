import mongoose from 'mongoose';

const serverSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  channels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' }],
}, { timestamps: true });

const Server = mongoose.model('Server', serverSchema);

export default Server;