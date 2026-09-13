import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  totalUploads: { type: Number, default: 0 },
  totalDownloads: { type: Number, default: 0 },
  videoCount: { type: Number, default: 0 },
  imageCount: { type: Number, default: 0 },
  documentCount: { type: Number, default: 0 },
  profilePic: { type: String, default: 'https://ui-avatars.com/api/?name=User&background=6366f1&color=fff&bold=true&size=128' },
  lastLogin: { type: Date, default: null },
  currentLogin: { type: Date, default: null },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

export {User};