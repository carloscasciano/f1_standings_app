const axios = require('axios')


const createDriverStandingsData = (position, name, constructor, wins, points) => {
    return {position, name, constructor, wins, points}
}

const createDriverStandingsRows = (driversList) => {
    
    let driverStandingsRows = []
    for (let i = 0; i < driversList.length; i++) {
        let constructorCheck = ""
        
        // API dont have constructors info if season did not started, used conditional below to overrides it 
        if (driversList[i]["Constructors"].includes(i)) {
            constructorCheck = "available at season start"
        } else {
            constructorCheck = driversList[i]["Constructors"][0]["name"]
        }

        let tempArray = createDriverStandingsData(
            driversList[i]['position'],
            (driversList[i]["Driver"]["givenName"] + " " + driversList[i]["Driver"]["familyName"] ),
            constructorCheck,
            driversList[i]['wins'],
            driversList[i]['points']
        )
        driverStandingsRows.push(tempArray)
    }
    return driverStandingsRows
}

async function getRawDriverStandingsData() {
    try {
        const response = await axios.get('https://ergast.com/api/f1/2019/driverStandings.json')
        return response
    } catch (error) {
      console.error(error);
    }
  }

async function getDriverStandingsData() {

    const response = await getRawDriverStandingsData()
    const unformattedJson = response.request.response
    const parsedJson = JSON.parse(unformattedJson)
    const driversList = parsedJson["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"]
    let returnData = createDriverStandingsRows(driversList)
    returnData = returnData.map(element=>element)
    return returnData
  }

export default getDriverStandingsData