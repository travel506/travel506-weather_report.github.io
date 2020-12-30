//  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// 53dacec2f208cfb87a6cb816fc744f56 

//35.53

const api={
    // key:"53dacec2f208cfb87a6cb816fc744f56",
    // baseUrl:"https://api.openweathermap.org/data/2.5/weather?",
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

//event listener function on keypress
const srcbox=document.getElementById("inputbox");
srcbox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13) {
        console.log(srcbox.value);
        // if(srcbox.sys.country==="undefined")
        // {
        //    console.log("W");
        // }
        // else{
        getweather(srcbox.value);
    }
});

//get weather report
function getweather(city){
  fetch(`${api.baseUrl}?q=${city}&appid=${api.key}&units=metric`)
  .then(weather =>{
       return weather.json();  //  api return in json form
  }).then(showweather);
}

//show weather report
function showweather(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;

    let temperature=document.getElementById('tmp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let weathertype=document.getElementById("weather");
    weathertype.innerText=`${weather.weather[0].main}`;


    let date=document.getElementById("date");
    let todaydate=new Date();
    date.innerText=managedate(todaydate);
    // Mist

    if(weathertype.textContent=='Clear'){
        document.body.style.backgroundImage="url('clr.jpg')";
        document.body.style.img="url('icon_clr')";
    }

    else if(weathertype.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('cloud.jpg')";
        document.getElementById("img").src = "icon_cloud.jpg";
    }
    
    else if(weathertype.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('haze.jpg')"; 
    }

    else if(weathertype.textContent == 'Fog') {
        document.body.style.backgroundImage = "url('fog.jpg')"; 
    }
    
    else if(weathertype.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('rain.jpg')";
    } 
    
    else if(weathertype.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('snow.jpg')";
        document.getElementById("img").src ="url('icon_snow.jpg')";
    }
    
    else if(weathertype.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('thunderstorm.jpg')";   
    }
}

function managedate(date){
let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
let months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
let year=date.getFullYear();
let month=months[date.getMonth()];
let dt=date.getDate();
let day=days[date.getDay()];

return `${day}, ${month} ${dt}`;
}