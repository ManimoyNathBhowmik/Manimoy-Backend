const express = require('express');

var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

mongoose.connect("mongodb+srv://manimoyBhowmik:Mycluster@cluster0.ysvufvg.mongodb.net/bookCollection"
,{
    useNewUrlParser: true,
}
).then( ()=> {console.log( "Mongo Dp is Successfully connected" )} )
.catch(err => console.log(err))

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

