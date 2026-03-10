document.querySelector('#search').addEventListener('submit',(event)=>{
    event.preventDefault();

    const cityname = document.querySelector('#city_name').value;

    if(!cityname){
        return showalert('Digite o nome de uma cidade.');
    }

    console.log(cityname)
});

function showalert(msg){
    document.querySelector('#alert').innerHTML = msg;
}
