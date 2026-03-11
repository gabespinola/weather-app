document.querySelector('#search').addEventListener('submit',async(event)=>{
    event.preventDefault();

    const cityname = document.querySelector('#city_name').value;

    if(!cityname){
        return showalert('Digite o nome de uma cidade!');
    }

    const apikey = '98a691c35b223c88297755de5a0bd68a'
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityname)}&appid=${apikey}&units=metric&lang=pt_br`


    const results=await fetch(apiurl);
    const json =  await results.json()

    if(json.cod=== 200){
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempmax: json.main.temp_max,
            tempmin: json.main.temp_min,
            description: json.weather[0].description,
            tempicon: json.weather[0].icon,
            windspeed: json.wind.speed,
            humidity: json.main.humidity,
        })


    }else{
        showalert('Não foi possivel localizar!')

    }
});


function showInfo(json){
   showalert('') 

   document.querySelector("#weather").classList.add('show');

   document.querySelector("#title").innerHTML= `${json.city}, ${json.country}`;
  
   document.querySelector("#temp_value").innerHTML= `${json.temp.toFixed(1).toString().replace('.',',')} <sup>°C</sup>`

   document.querySelector("#temp_description").innerHTML= `${json.description}`

   document.querySelector("#temp_img").setAttribute('src',` https://openweathermap.org/img/wn/${json.tempicon}@2x.png`)
   
   document.querySelector("#temp_max").innerHTML= `${json.tempmax.toFixed(1).toString().replace('.',',')} <sup>°C</sup>`

   document.querySelector("#temp_min").innerHTML= `${json.tempmin.toFixed(1).toString().replace('.',',')} <sup>°C</sup>`

   document.querySelector("#humidity").innerHTML= `${json.humidity}%`

   document.querySelector("#wind").innerHTML= `${json.windspeed.toFixed(1)}km/h`
   






}


function showalert(msg){
    document.querySelector('#alert').innerHTML = msg;
}
