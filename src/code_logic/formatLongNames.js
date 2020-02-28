const formatLongNames = (name) => {
    if (name.length >= 18) {
        let namesArr = name.split(" ")
        namesArr[0] = namesArr[0].charAt(0) + "."
        let shortName = namesArr.join(" ")
        return shortName
    } else {
        return name
    }
}

export default formatLongNames