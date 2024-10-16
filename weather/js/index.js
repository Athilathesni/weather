
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
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";

if(data.weather[0].main=="Cloud"){
    weatherIcon.src="./cloude.png"
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="./clear.png"
}
else if(data.weather[0].main=="rain"){
    weatherIcon.src="./rain.jpg"
}

document.querySelector(".weather").style.display="block"

}


searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value)
})




// const weatherData = {
//     city: "New York",
//     temperature: 20,
//     condition: "Clear",
// };

// function changeBackground(condition) {
//     const body = document.body;
//     body.className = ''; // Clear previous classes

//     if (condition.toLowerCase() === "clear") {
//         body.classList.add('clear');
//     } else if (condition.toLowerCase() === "rain") {
//         body.classList.add('rain');
//     } else if (condition.toLowerCase() === "cloude") {
//         body.classList.add('cloude');
//     }
// }

// // Display weather data and set background
// document.getElementById('city').textContent= weatherData.city;
// document.getElementById('temperature').innerHTML = `Temperature: ${weatherData.temperature}°C`;
// document.getElementById('condition').innerHTML = `Condition: ${weatherData.condition}`;
// changeBackground(weatherData.condition);








