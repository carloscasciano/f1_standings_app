const axios = require('axios')

const createScheduleData = (date, hour, gp, circuit, polePosition, raceResults, raceWinner, details) => {
    return {date, hour, gp, circuit, polePosition, raceResults, raceWinner, details}
}

const createScheduleRows = (scheduleList, qualifyingList) => {
    let scheduleRows = []
    for (let i = 0; i < scheduleList.length; i++) {
        let tempArray = createScheduleData(
            scheduleList[i]["date"],
            scheduleList[i]["time"],
            scheduleList[i]["raceName"],
            scheduleList[i]["Circuit"]["circuitName"],
            qualifyingList[i]["QualifyingResults"][0]["Driver"]['familyName']

        )
        scheduleRows.push(tempArray)
    }
    return scheduleRows
}

async function getRawScheduleStandingsData() {
    try {
        const response = await axios.get('https://ergast.com/api/f1/2019.json')
        return response
    } catch (error) {
      console.error(error);
    }
  }

  async function getQualifyingData() {
    try {
        const response = await axios.get('https://ergast.com/api/f1/2019/qualifying/1.json')
        return response
    } catch (error) {
      console.error(error);
    }
  }

async function getScheduleData() {
    const scheduleResponse = await getRawScheduleStandingsData()
    const scheduleUnformattedJson = scheduleResponse.request.response
    const scheduleParsedJson = JSON.parse(scheduleUnformattedJson)
    const scheduleList = scheduleParsedJson["MRData"]["RaceTable"]["Races"]
    
    const qualifyingResponse = await getQualifyingData()
    const qualifyingUnformattedJson = qualifyingResponse.request.response
    const qualifyingParsedJson = JSON.parse(qualifyingUnformattedJson)
    const qualifyingList = qualifyingParsedJson["MRData"]["RaceTable"]["Races"]

    //console.log(qualifyingList)


    let returnData = createScheduleRows(scheduleList, qualifyingList)
    //returnData = returnData.map(element=>element)
    console.log(returnData)
}

export default getScheduleData

/* 


    let returnData = createConstructorRows(constructorsList)
    returnData = returnData.map(element=>element)
    return returnData
}

export default getConstructorStandingsData


*/