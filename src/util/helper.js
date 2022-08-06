function printDate(){
    const d = new Date()
    console.log(d)
}
function printMonth(){
    const m = new Date()
    console.log(m.toLocaleString("en-Us",{ month: "long"}))
}

function getBatchInfo(){
    console.log('Plutonium, weak 3 day 7, the topic for today is nodejs module system')

}

module.exports.date = printDate;
module.exports.month = printMonth;
module.exports.info = getBatchInfo;