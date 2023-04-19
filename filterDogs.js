let dogTypes = document.getElementById("dogTypes");

const getDogBreeds = async () =>{
    const getData = await fetch("https://api.thedogapi.com/v1/breeds");
    const json = await getData.json();
    console.log(json);
    
    for(let i=0;i < json.length; i++){
        const newOption = document.createElement("option");
            //console.log(json[i]);
            newOption.value = json[i].id;
            newOption.text = json[i].name;
            dogTypes.appendChild(newOption);
    }
    
}

getDogBreeds();