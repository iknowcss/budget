var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LineItemSchema = new Schema({
  description: String,
  amount: Number,
  frequency: String
});

var BudgetSchema = new Schema({
  icon: String,
  description: String,
  color: String,
  lineItems: [ LineItemSchema ]
});

mongoose.model('Budget', BudgetSchema);