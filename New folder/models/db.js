const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, (err)=>{
    if (!err) 
    {
         console.log('MongoDB connection succeeded.');
    }
    else
    {
         console.log('Error.' +JSON.stringify(err, undefined,2));
    }
});

require('./user.model');