const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//user schema
const userSchema = new Schema({
  firstName: { type: String, required: [true, 'First name is required'] },
  lastName: { type: String, required: [true, 'Last name is required'] },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: [true, 'This email address has been used'],
  },
  password: { type: String, required: [true, 'Password is required'] },
});

userSchema.pre('save', function (next) {
  let user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt
      .hash(user.password, salt)
      .then((hash) => {
        user.password = hash;
        next();
      })
      .catch((err) => next(error));
  });
}); 

//exports user schema
module.exports = mongoose.model('User', userSchema);
