const app = require('./app');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ralphgui:q5Tk76tRUz3GKJm@cluster0-xnmds.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("mongo online..");
    
});





app.listen(3000, () => {
    console.log(`Server started on 3000`);
});