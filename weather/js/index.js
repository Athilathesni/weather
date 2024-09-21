
const apikey="ac5a6e4296bb2dd0c74c8904e3b17898";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkweather(city){
    const response=await fetch(apiUrl+city +`&appid=${apikey}`)
    var data=await response.json()

    // console.log(data);
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";

if(data.weather[0].main=="Cloud"){
    weatherIcon.src="./cloudy.png"
}
else if(data.weather[0].main=="clear"){
    weatherIcon.src="./clear-sky.png"
}
if(data.weather[0].main=="rain"){
    weatherIcon.src="./png-clipart-rain-meteorology-cloud-thunderstorm-lightning-rain-weather-icon-material-free-to-pull-free-logo-design-template-camera-icon.png"
}
if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="./5753018.webp"
}
if(data.weather[0].main=="Mist"){
    weatherIcon.src="./8449649.png"
}

document.querySelector(".weather").style.display="block"

}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value)
})