let txtBox = document.getElementById("txtBox");
let btn = document.getElementById("btn");
let weather = document.getElementById("weather");
//console.log(input.value);
const apiKey = "b009ffa5d81221526accabcc3e171d6e";

const clickHandler = () =>{
    getWeather(txtBox.value);
}

const getWeather = async (search) =>{
    //alert("i was called");
    //e.preventDefault();
    console.log(txtBox.value);
    const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=${search}`);
    const json = await getData.json();
    console.log(json.weather);
    const description = json.weather.map(e => (e.description));
    //console.log(description[0]);
    
    let weatherObj = {
        Name : json.name,
        Current : json.main.temp,
        Min : json.main.temp_min,
        Max : json.main.temp_max,
        Humidity : json.main.humidity,
        Description : description[0]
    }
    console.log(weatherObj);
    weather.innerHTML = `<h3>Name :${weatherObj.Name}</h3>
    <p>Current : ${weatherObj.Current}</p>
    <p> Min : ${weatherObj.Min}</p>
    <p> Max : ${weatherObj.Max}</p>
    <p>Humidity : ${weatherObj.Humidity}</p>
    <p> Description : ${weatherObj.Description}</p>`;
    console.log(weather);
}
//getWeather();
btn.addEventListener('click', clickHandler);