const mongoose = require("mongoose");

var url = "mongodb://localhost:27017/wtb";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

module.exports = db;