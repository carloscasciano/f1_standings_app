const axios = require('axios')

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


const createScheduleData = (date, hour, gp, circuit, polePosition, raceWinner, details) => {
    return {date, hour, gp, circuit, polePosition, raceWinner, details}
}

const createScheduleRows = (scheduleList, qualifyingList, winnerList) => {
    let scheduleRows = []
    for (let i = 0; i < scheduleList.length; i++) {
        let tempArray = createScheduleData(
            scheduleList[i]["date"],
            scheduleList[i]["time"],
            scheduleList[i]["raceName"],
            scheduleList[i]["Circuit"]["circuitName"],
            qualifyingList[i]["QualifyingResults"][0]["Driver"]['familyName'],
            winnerList[i]["Results"][0]["Driver"]['familyName'],
            scheduleList[i]["url"]

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
    
    const qualifyingResponse = await getQualifyingData(year)
    const qualifyingUnformattedJson = qualifyingResponse.request.response
    const qualifyingParsedJson = JSON.parse(qualifyingUnformattedJson)
    const qualifyingList = qualifyingParsedJson["MRData"]["RaceTable"]["Races"]

    const winnerResponse = await getWinnerData(year)
    const winnerUnformattedJson = winnerResponse.request.response
    const winnerParsedJson = JSON.parse(winnerUnformattedJson)
    const winnerList = winnerParsedJson["MRData"]["RaceTable"]["Races"]

    let returnData = createScheduleRows(scheduleList, qualifyingList, winnerList)
    returnData = returnData.map(element=>element)
    
    return returnData
}

export default getScheduleData
