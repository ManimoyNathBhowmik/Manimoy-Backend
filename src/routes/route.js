const express = require('express');
const time = require('express-timestamp')
const router = express.Router();
var app = express()
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")
const commonMW = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createBook", BookController.createBook)




// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


const mid1 = function (req, res, next) {
    console.log("Hi I am a middleware named Mid1")
    // logic

    // let loggedIn = true

    // if (loggedIn== true) { 
    //     //console.log( "OK LOGGED IS IS TRUE NOW")
    //     next ()
    // }
    // else {
    //     //res.send ("Please login or register")
    // }
    console.log(req.path);
    // app.use(time.init)
    // console.log(time)

    var ip = require("ip");
    console.log(ip.address());

    // var timestamp = Number(new Date());
    // console.log(timestamp);

    // const dateObject = new Date();
    // current date
    // adjust 0 before single digit date
    // const date = (`0 ${dateObject.getDate()}`).slice(-2);
    // console.log(date)

    const dateObject = new Date();
    // current date
    // adjust 0 before single digit date
    const date = (`0 ${dateObject.getDate()}`).slice(-2);

    // current month
    const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);

    // current year
    const year = dateObject.getFullYear();

    // current hours
    const hours = dateObject.getHours();

    // current minutes
    const minutes = dateObject.getMinutes();

    // current seconds
    const seconds = dateObject.getSeconds();

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    console.log(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);

    next()
}

router.get('/homePage', mid1, UserController.basicCode)







// // e.g. restricted and open-to-all API's can be handled like below now:

// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)





router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;