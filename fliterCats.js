//let animals = document.getElementById("animals");
let catTypes = document.getElementById("catTypes");

const getBreeds = async () =>{
    const getData = await fetch("https://api.thecatapi.com/v1/breeds");
    const json = await getData.json();
    //console.log(json);
    
    for(let i=0;i < json.length; i++){
        const newOption = document.createElement("option");
            //console.log(json[i]);
            newOption.value = json[i].id;
            newOption.text = json[i].name;
            catTypes.appendChild(newOption);
    }
    
}

getBreeds();