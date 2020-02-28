export default function formatHour(hourString) {
    let splitHour = hourString.split(':')
    return (splitHour[0] + "h" + splitHour[1])
}