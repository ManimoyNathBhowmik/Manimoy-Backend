let axios = require("axios")

//GetDistrictSessions****************************************************************************************

let getDistrictSession = async function (req, res) {
    try {
        let district = req.query.districtId
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`


        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })


    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getDistrictSession = getDistrictSession

//gettingMeme & creatingMeme ******************************************************************************

const getMemes = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const myMeme = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        //console.log(`query params are: ${template_id} ${text0} ${text1} ${username} ${password}`)
        var options = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getMemes = getMemes;
module.exports.myMeme = myMeme;

//sorting Temp ******************************************************************************************

let weatherData = async function (req, res) {
    try {
        let cityNames = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let objArr = []
        for (let city = 0; city < cityNames.length; city++) {
            let objOfCity = { city: cityNames[city] }
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityNames[city]}&appid=6b31c9805cd7bce4d56e091e11f75837`
            }
            let result = await axios(options)
            console.log(result.data.main.temp)
            objOfCity.temp = result.data.main.temp
            objArr.push(objOfCity)
        }
        let sort = objArr.sort((a, b) => { return a.temp - b.temp })
        console.log(sort)
        res.status(200).send({ msg: sort })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}
module.exports.weatherData = weatherData