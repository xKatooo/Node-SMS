const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/smsdb' ,{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(db => console.log("base de datos conectada !")).catch(err => console.log(err))
