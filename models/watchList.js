const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// watchlist schema
const watchListSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    trade: { type: Schema.Types.ObjectId, ref: 'Trade' },
  },
  { timestamps: true }
);


//exports watchlist
module.exports = mongoose.model('WatchList', watchListSchema);
