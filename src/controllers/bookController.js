
const authorModel = require("../models/authorModel")
const userModel = require("../models/userModels")


const creatBooks = async function(req,res){
    let data = req.body
    let saveData = await userModel.create(data)
    res.send({msg: saveData})

}

const authorList = async function(req,res){
    let data = req.body
    let saveAuthorData = await authorModel.create(data)
    res.send({msg: saveAuthorData})
}

const listBooks = async function(req, res){
    let findauthor = await authorModel.find({author_name:"Chetan Bhagat"})
    let findbook = await userModel.find({ author_id : {$eq : findauthor[0].author_id}})
    res.send({msg : findbook})
}

const updatebook = async function(req,res){
    let bookprice = await userModel.findOneAndUpdate({book_name : "Two States" },{$set : {price: 100}},{new:true})
    let updatedprice = bookprice.price;
    let authorupdate = await authorModel.find({author_id: {$eq : bookprice.author_id}}).select({author_name:1,_id:0})
    res.send({authorupdate , updatedprice})

}

const bookrange = async function(req,res){
    let range = await userModel.find({price:{$gt:50,$lte:100}})
    let a = range.map(x=>x.author_id);
    let newrange = await authorModel.find({author_id:{$in:a}}).select({author_name:1,_id:0})
    res.send(newrange)
}



module.exports.creatBooks = creatBooks;
module.exports.authorList = authorList;
module.exports.listBooks = listBooks;
module.exports.updatebook = updatebook;
module.exports.bookrange  = bookrange ;














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

// const updateBooks = async function(req,res){
//     let allBooks = await userModel.updateMany(
//         {AuthorName: "jadu"},
//         {$set: {totalPages:1000000}}
//     )
//     res.send({msg: allBooks})
// }


// this is from user end updating

// const updateBooks = async function(req,res){
//     let data = req.body
//     let allBooks = await userModel.updateMany(
//         {AuthorName: "jadu"},
//         {$set: data}
//     )
//     res.send({msg: allBooks})
// }

// const updateBooks = async function(req,res){
//     let data = req.body
//     let allBooks = await userModel.findOneAndUpdate(
//         {AuthorName: "jadu"},
//         {$set: data}
//     )
//     res.send({msg: allBooks})
// }

const updateBooks = async function(req,res){
    let data = req.body
    let allBooks = await userModel.findOneAndUpdate(
        {AuthorName: "jadu"},
        {$set: data},
        {new: true, upsert: true},
    )
    res.send({msg: allBooks})
}




module.exports.updateBooks = updateBooks;
module.exports.createBooklist = createBooklist ;
module.exports.getBookList = getBookList ;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;