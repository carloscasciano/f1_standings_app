const axios = require('axios')

async function getRawConstructorStandingsData(year) {
    try {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/constructorStandings.json`)
        return response
    } catch (error) {
      console.error(error);
    }
  }

const createConstructorsStandingsData = (position, constructor, wins, points) => {
    return {position, constructor, wins, points}
}

const createConstructorRows = (constructorsList) => {
    let constructorStandingsRows = []
    for (let i = 0; i < constructorsList.length; i++) {
        let tempArray = createConstructorsStandingsData(
            constructorsList[i]['position'],
            constructorsList[i]['Constructor']['name'],
            constructorsList[i]['wins'],
            constructorsList[i]['points']
        )
        constructorStandingsRows.push(tempArray)
    }
    return constructorStandingsRows
}


async function getConstructorStandingsData(year) {
    const response = await getRawConstructorStandingsData(year)
    const unformattedJson = response.request.response
    const parsedJson = JSON.parse(unformattedJson)
    const constructorsList = parsedJson["MRData"]["StandingsTable"]["StandingsLists"][0]["ConstructorStandings"]
    let returnData = createConstructorRows(constructorsList)
    returnData = returnData.map(element=>element)
    return returnData
}

export default getConstructorStandingsData
