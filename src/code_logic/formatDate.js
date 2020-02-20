let moment = require('moment')


// 2019-03-17

let dummyDate = "2019-03-17"
console.log(typeof dummyDate)

//console.log(moment(dummyDate, "YYYY-MM-DD"))

let dateNow = moment(dummyDate, "YYYY-MM-DD")

console.log(dateNow.format("MMMM Do"))

let now = moment()
console.log(now.format("MMMM Do"))


console.log(now < dateNow)