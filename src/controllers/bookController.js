
const userModel = require("../models/userModels")

const createBooklist = async function(req,res){
    
    let data = req.body
    let saveData = await userModel.create(data)

    res.send({msg: saveData})

}

const getBookList = async function(req,res){

    // let allBooks = await userModel.find({bookName:1, AuthorName:1})
    // res.send({msg: allBooks})

    let allUser =await userModel.find({},{bookName:1 , AuthorName:1 , _id:0})
    res.send({msg: allUser})
}

const getBooksInYear = async function(req,res){
    let year = req.query.year
    let books = await userModel.find({year: year})
    res.send({data: books})
}

const getParticularBooks = async function(req,res){
    let input = req.query.bookName
    let reg = /[A-z]/g
    let books = await userModel.find({bookName: input}).match(reg)
    res.send({data: books})
}

const getXINRBooks = async function(req,res){
    let books =await userModel.find({$or:[{indianPrice: 100},{indianPrice: 200},{indianPrice: 500}]}).select({bookName: 1})
    res.send({data: books})

}

const getRandomBooks = async function(req,res){
    let books = await userModel.find({$or: [{stockAvailable: true,totalPages:{$gt: 500}}]})
    res.send({data: books})

}


module.exports.createBooklist = createBooklist ;
module.exports.getBookList = getBookList ;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;