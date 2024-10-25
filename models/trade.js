const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// trade schema
const tradeSchema = new Schema({
     category: {type:String, required: [true, 'content is required']},
     item_Name:{ type:String, required: [true, 'item_Name is required']},
     designed_By:{ type:String, required: [true, 'Designer is required']},
     manufactured_At: {type: String, required: [true, 'manufactured place is required']},
     details : {type: String, required: [true, 'model details is required'],
               minLength:[10, 'the contents should have at least 10 characters']}
},
{timestamps:true}
);

// collection name is Trades in the database
module.exports = mongoose.model('Trade', tradeSchema);
