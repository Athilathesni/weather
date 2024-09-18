function getweather(){
const apikey=`871a585f5d98d79c634071ca97fd9092`;
const city= document.getElementById('city').value;

if(!city){
    alert('please enter a city')
    return;
}
const currentWeatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
const forecastUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


fetch(currentWeatherUrl)
.then(Response=>Response.json())
.then(data =>{
    displayWeather(data)
})
.catch(error =>{
    console.error('error fetching current weather data:',error);
    alert('error fetching current weather data please try again');
})
fetch(forecastUrl)
.then(Response=>Response.json())
.then(data=>{
    displayHourlyforecast(data.list);
})
.catch(error=>{
    console.error('error fetching hourly forecast data:',error);
    alert('error fetching hourly forecast data.please try again.')
})
}
function displayWeather(data){
    const tempDivInfo=document.getElementById('temp-div')
    const weatherInfoDiv=document.getElementById('weather-info')
    const weathericon=document.getElementById('weather-icon')
    const hourlyforecastDiv=document.getElementById('hourly-forecast')

    weatherInfoDiv.innerHTML='';
    hourlyforecastDiv.innerHTML='';
    tempDivInfo.innerHTML='';
}



function displayWeather(data){
    if(data.cod === '404'){
        weatherInfoDiv.innerHTML=`<p>${data.message}</p>`
    }
    else{
        const cityName =data.cityName;
        
    }
}
