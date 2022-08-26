const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const MiddleC=require('./middleware/middleware')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(MiddleC.middle2)

mongoose.connect("mongodb+srv://manimoyBhowmik:Mycluster@cluster0.ysvufvg.mongodb.net/myNewCurd"
,{
    useNewUrlParser: true,
}
).then( ()=> {console.log( "Mongo Dp is Successfully connected" )} )
.catch(err => console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
