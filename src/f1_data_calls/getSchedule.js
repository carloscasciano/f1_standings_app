import formatHour from '../code_logic/formatHour'
const axios = require('axios')
const moment = require('moment')

async function getRawScheduleStandingsData(year) {
    try {
        const response = await axios.get(`https://ergast.com/api/f1/${year}.json`)
        return response
    } catch (error) {
      console.error(error);
    }
}

async function getQualifyingData(year) {
    try {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/qualifying/1.json`)
        return response
    } catch (error) {
      console.error(error);
    }
}

async function getWinnerData(year) {
    try {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/results/1.json`)
        return response
    } catch (error) {
      console.error(error);
    }
}

const createScheduleData = (date, hour, gp, circuit, polePosition, raceWinner, details, country) => {
    return {date, hour, gp, circuit, polePosition, raceWinner, details, country}
}

const createScheduleRows = (scheduleList, qualifyingList, winnerList, year) => {
    let scheduleRows = []
    let qualyfingData = ""
    let winnerData = ""
    let hourData = ""

    for (let i = 0; i < scheduleList.length; i++) {

        // qualifyingList off cases 
        if (qualifyingList === "before 2003") {
            qualyfingData = `only > 2003`
        } else if (qualifyingList.length === 0) {
            qualyfingData = `${moment(scheduleList[i]["date"], "YYYY-MM-DD").add(1,'day').format("MMMM Do")}`
        } else {
            qualyfingData = qualifyingList[i]["QualifyingResults"][0]["Driver"]['familyName']
        }
        
        //winnersData off cases
        if (winnerList.length === 0) {
            winnerData = `${moment(scheduleList[i]["date"], "YYYY-MM-DD").add(1,'day').format("MMMM Do")}`
        } else if (winnerList[i]["Results"][0]["Driver"]['familyName'] === undefined) {
            winnerData = `${moment(scheduleList[i]["date"], "YYYY-MM-DD").add(1,'day').format("MMMM Do")}`
        } else {
            winnerData = winnerList[i]["Results"][0]["Driver"]['familyName']
        }

        //hour off cases
        if (scheduleList[i]["time"] === undefined ) {
            hourData = "TBD"
        } else {
            hourData = formatHour(scheduleList[i]["time"])
        }
        
        let tempArray = createScheduleData(
            moment(scheduleList[i]["date"], "YYYY-MM-DD").format("MMMM Do"),
            hourData,
            scheduleList[i]["raceName"],
            scheduleList[i]["Circuit"]["circuitName"],
            qualyfingData,
            winnerData,
            scheduleList[i]["url"],
            scheduleList[i]["Circuit"]["Location"]["country"]
        )
        scheduleRows.push(tempArray)
    }
    return scheduleRows
}

async function getScheduleData(year) {
    const scheduleResponse = await getRawScheduleStandingsData(year)
    const scheduleUnformattedJson = scheduleResponse.request.response
    const scheduleParsedJson = JSON.parse(scheduleUnformattedJson)
    const scheduleList = scheduleParsedJson["MRData"]["RaceTable"]["Races"]
    
    // api does not have info before 2003
    let qualifyingList = []
    if (year < 2003) {
        qualifyingList = "before 2003"
    } else {
        const qualifyingResponse = await getQualifyingData(year)
        const qualifyingUnformattedJson = qualifyingResponse.request.response
        const qualifyingParsedJson = JSON.parse(qualifyingUnformattedJson)
        qualifyingList = qualifyingParsedJson["MRData"]["RaceTable"]["Races"]
    }
   
    const winnerResponse = await getWinnerData(year)
    const winnerUnformattedJson = winnerResponse.request.response
    const winnerParsedJson = JSON.parse(winnerUnformattedJson)
    const winnerList = winnerParsedJson["MRData"]["RaceTable"]["Races"]

    let returnData = createScheduleRows(scheduleList, qualifyingList, winnerList, year)
    returnData = returnData.map(element=>element)  
    return returnData
}

export default getScheduleData