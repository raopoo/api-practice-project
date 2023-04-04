let catsBtn = document.getElementById("catsBtn");
let dogsBtn = document.getElementById("dogsBtn");
let animals = document.getElementById("animals");

const getTenCats = async () => {
    const getTenData = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    const json = await getTenData.json();
    console.log(json);
    json.map((el) => {
        animals.innerHTML += `<img class="animalsImg" src=${el.url} alt=${el.id}>`;
    });
};

const getTenDogs = async () => {
    const getTenData = await fetch(
        "https://api.thedogapi.com/v1/images/search?limit=10"
    );
    const json = await getTenData.json();
    console.log(json);
    json.map((el) => {
        animals.innerHTML += `<img class="animalsImg" src=${el.url} alt=${el.id}>`;
    });
};

let getCats = async () => {
    const getData = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await getData.json();
    console.log(json[0]);

    animals.innerHTML = `<img class="animalsImg" src=${json[0].url} alt=${json[0].id}>`;
};

let getDogs = async () => {
    const getData = await fetch("https://api.thedogapi.com/v1/images/search");
    const json = await getData.json();
    console.log(json[0]);

    animals.innerHTML = `<img class="animalsImg" src=${json[0].url} alt=${json[0].id}>`;
};

catsBtn.addEventListener("click", getTenCats);
dogsBtn.addEventListener("click", getTenDogs);
