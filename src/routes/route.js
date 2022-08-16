const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const bookController = require("../controllers/bookController")

const router = express.Router();
const userModel = require("../models/userModels")



router.post("/create-book",bookController.createBooklist )


router.get("/book-list",bookController.getBookList)

router.post("/get-Books-In-Year",bookController.getBooksInYear)

router.post("/get-Particular-Books",bookController.getParticularBooks)

router.get("/get-XINR-Books",bookController.getXINRBooks)

router.get("/get-Random-Books",bookController.getRandomBooks)

// })




let persons = [
    {
        name : "pk",
        age : 10 ,
        votingStatus : false

    },
    {
        name : "sk",
        age : 20 ,
        votingStatus : false

    },
    {
        name : "aa",
        age : 70 ,
        votingStatus : false

    },
    {
        name : "sc",
        age : 5 ,
        votingStatus : false

    },
    {
        name : "ho",
        age : 40 ,
        votingStatus : false

    },
]

router.post('/getvooting-status', function(req,res){
    let votingAge = req.query.age
    let eligibalePerson = []
    for (let i = 0; i<persons.length; i++){
        if(persons[i].age > votingAge){
            persons[i].votingStatus = true;
            eligibalePerson.push(persons[i])
        }
    }
    res.send({persons:eligibalePerson,status:true})
})







router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

router.get("/myy-query-param",function(req,res){

    let marks = req.query.marks
    let result = marks > 40 ? "pass" : "fail"
    res.send({data : result, status : true})

})

//filter out all numbers are gretter then input

let myArr = [12,55,78,241,69,14,44]
router.post("/filter",function(req,res){


    let input = req.query.input
    let finalArr = myArr.filter(ele => ele > input)
    
    // let num = req.query.myArr
    // const result = myArr.filter(myArr => myArr.length > i);
    res.send({data:finalArr, status :true})
})








let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports":
            [
                "swimming"
            ]
    },
    {
        "name": "gopal",
        "dob": "1/5/1996",
        "gender": "male",
        "city": "delhi",
        "sports":
            [
                "football"
            ]
    },
    {
        "name": "lockes",
        "dob": "5/7/1999",
        "gender": "male",
        "city": "UP",
        "sports":
            [
                "busketball"
            ]

    }
]

router.post('/players', function(req, res){

    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeted = false //flag

    for(let i=0; i < players.length; i++){
        if(players[i].name == newPlayersName){
            isNameRepeted = true;
            break;
        }
    }
        if (isNameRepeted){
            res.send("Player is already exist") 
        }
        else{
            players.push(newPlayer)
            res.send(players)
        }
    //res.send( { data : players , status : true} )
});


router.post('/test-post-4', function (req, res) {
    let arr = [12, "FunctionUp"]
    let ele = req.body.element
    arr.push(ele)

    res.send({ msg: arr, status: true })
})


router.get("/movies/:indexNumber", function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if (movieIndex < 0 || movieIndex >= movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

router.get("/numbers-chk", function (req, res) {
    let arr = [1, 2, 4, 5, 6, 7, 8]
    function number(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (i + 1 != arr[i]) {
                return arr[i] - 1
            } else {

            }
        }
    }
    let result = number(arr)
    res.send(result.toString())
})

router.get("/Second-number", function (req, res) {
    const findMissing = num => {
        const max = Math.max(...num);
        const min = Math.min(...num);
        const missing = []

        for (let i = min; i <= max; i++) {
            if (!num.includes(i)) {
                missing.push(i);
            }
        }
        res.send(missing)
    }

    findMissing([1, 2, 6]);
})

router.get("/shoes", function (req, res) {
    let queryParams = req.query
    let brand = queryParams.brand
    res.send("dummy response")
})

// uses query params
router.get('/candidates', function (req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is ' + state)
    console.log('Gender is ' + gender)
    console.log('District is ' + district)
    let candidates = ['Akash', 'Suman']
    res.send(candidates)
})

// use path param
router.get('/candidates/:canidatesName', function (req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    console.log('Candidates name is ' + req.params.canidatesName)
    res.send('Done')
})

router.get("/films", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    //send all the films
    res.send(films)
})

router.get("/films/:filmId", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let filmId = req.params.filmId

    //iterate all the films
    //search for a film whose id matches with the id recevied in request
    for (let i = 0; i < films.length; i++) {
        let film = films[i]
        if (film.id == filmId) {
            //if there is a match return the response from here
            return res.send(film)
        }
    }

    //if there is no match give an error response
    res.send("The film id doesn't match any movie")
})

module.exports = router;
// adding this comment for no reason