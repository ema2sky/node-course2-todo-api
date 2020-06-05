var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// mongoose.set('useFindAndModify', false);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);

module.exports={
    mongoose
}