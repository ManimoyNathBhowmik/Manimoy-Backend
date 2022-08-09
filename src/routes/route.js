const { response } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get("/movies/:indexNumbers",function(req, res){
    const movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins",];
    console.log(req.params.indexNumbers)
    let movieIndex = req.params.indexNumbers

    if(movieIndex <0 || movieIndex >= movies.length){
        return res.send('index value is not correct')
    }


    let requireMovie = movies[movieIndex]

    res.send(requireMovie)
})

router.get("/films",function(req, res){
    const films = [
        {
          id: 1,
          name: "The Shining",
        },
        {
          id: 2,
          name: "Incendies",
        },
        {
          id: 3,
          name: "Rang de Basanti",
        },
        {
          id: 4,
          name: "Finding Nemo",
        },
      ];
      response.send(films)
})

router.get("/films/:filmID",function(req, res){
    const films = [
        {
          id: 1,
          name: "The Shining",
        },
        {
          id: 2,
          name: "Incendies",
        },
        {
          id: 3,
          name: "Rang de Basanti",
        },
        {
          id: 4,
          name: "Finding Nemo",
        },
      ];
      const filmID = req.params.filmID
      for(let i=0; i<films.length; i++){
        let film = films[i]
        if(film.id == filmID){
            res.send(film)
        }
      }
      res.send('the film id does not match any movie')

})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;