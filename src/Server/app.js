const mongoose = require('mongoose');

const DB = "mongodb+srv://navneet:navneet@cluster0.spwxdy4.mongodb.net/hullad?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('connection error'));