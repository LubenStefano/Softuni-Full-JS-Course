function attachEvents() {
document.getElementById("submit").addEventListener("click", forecast)
const location = document.getElementById("location")
const forecastSection = document.getElementById("forecast")

async function getRequest(city){
    const response = await fetch("http://localhost:3030/jsonstore/forecaster/locations")
    const data = await response.json()
    for(let info of data){
        if(info.name === city){
            return info
        }
    }
}
async function getTempToday(code){
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
    const data = await response.json()
    return data
}
async function getTemp3days(code){
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
    const data = await response.json()
    return data
}
async function forecast(){
    try{const cityInfo = await getRequest(location.value)
    const todayWeatherInfo = await getTempToday(cityInfo.code)
    const nextWeatherInfo = await getTemp3days(cityInfo.code)
    
    renderCurrCondition(todayWeatherInfo)
    renderFutureCondition(nextWeatherInfo)
    forecastSection.style.display = "block"}
    catch{
        forecastSection.textContent = "Error"
        forecastSection.style.display = "block"
    }
}
function renderCurrCondition(info){

    const forecastData = document.createElement("span")
    forecastData.classList.add("forecast-data")
    forecastData.textContent = `${info.name}`

    const forecastDataTemp = document.createElement("span")
    forecastDataTemp.classList.add("forecast-data")
    const degrees = getIcon("degrees")
    forecastDataTemp.innerHTML = `${info.forecast.low}${degrees}/${info.forecast.high}${degrees}`

    const forecastDataCondition = document.createElement("span")
    forecastDataCondition.classList.add("forecast-data")
    forecastDataCondition.textContent = `${info.forecast.condition}`

    const spanContainer = document.createElement("span")
    spanContainer.classList.add("condition")
    spanContainer.append(forecastData, forecastDataTemp, forecastDataCondition)

    const iconSpan = document.createElement("span")
    iconSpan.classList.add("condition", "symbol")
    const symbol = getIcon(info.forecast.condition)
    iconSpan.innerHTML = symbol

    const forecastDiv = document.createElement("div")
    forecastDiv.classList.add("forecast")
    forecastDiv.append(iconSpan, spanContainer)

    document.getElementById("current").append(forecastDiv)
}
function renderFutureCondition(info){
    const forecastInfo = document.createElement("div")
    forecastInfo.classList.add("forecast-info")
    for(let dayInfo of info.forecast){

    const symbolSpan = document.createElement("span")
    symbolSpan.classList.add("symbol")
    const icon = getIcon(dayInfo.condition)
    symbolSpan.innerHTML = icon

    const forecastDataTemp = document.createElement("span")
    forecastDataTemp.classList.add("forecast-data")
    const degrees = getIcon("degrees")
    forecastDataTemp.innerHTML = `${dayInfo.low}${degrees}/${dayInfo.high}${degrees}`

    const forecastDataCondition = document.createElement("span")
    forecastDataCondition.classList.add("forecast-data")
    forecastDataCondition.textContent = `${dayInfo.condition}`

    const upcoming = document.createElement("span")
    upcoming.classList.add("upcoming")
    upcoming.append(symbolSpan, forecastDataTemp, forecastDataCondition)
    forecastInfo.append(upcoming)
    }
    document.getElementById("upcoming").append(forecastInfo)
}
function getIcon(condition){
    const icons = {
    "Sunny": `&#x2600;`,
    "Partly sunny": `&#x26C5;`,
    "Overcast": `&#x2601;`,
    "Rain": `&#x2614;`,
    "degrees": `&#176;`,
    }
    return icons[condition]
}

}

attachEvents();