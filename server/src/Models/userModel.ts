import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlehgth: 3, maxlength: 50 },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
      unique: true,
    },
    password: { type: String, required: true, minlength: 5, maxlength: 30 },
  },
  { timestamps: true },
)

export default mongoose.model('User', userSchema)
