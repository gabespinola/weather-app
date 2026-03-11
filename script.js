document.querySelector('#search').addEventListener('submit',async(event)=>{
    event.preventDefault();

    const cityname = document.querySelector('#city_name').value;

    if(!cityname){
        return showalert('Digite o nome de uma cidade.');
    }

    const apikey = '98a691c35b223c88297755de5a0bd68a'
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityname)}&appid=${apikey}&units=metric&lang=pt_br`


    const results=await fetch(apiurl);
    const json =  await results.json()

    
});





function showalert(msg){
    document.querySelector('#alert').innerHTML = msg;
}
