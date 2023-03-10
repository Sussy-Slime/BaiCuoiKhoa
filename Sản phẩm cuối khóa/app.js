const myEmail = document.getElementById('inputEmail');
    h3 = document.querySelector("h3");
    h3.innerHTML = localStorage.getItem('myEmail');
    myEmail.addEventListener("keyup", display);

function display() {
    localStorage.setItem('myEmail', myEmail.value);
    localStorage.setItem('value', myEmail.value);
    h3.innerHTML = localStorage.getItem('value');
    h3.innerHTML = localStorage.getItem('myEmail');
}

PikachuWish = "Find happiness in the little things in life, and you will notice that happiness will never leave your side.";
ArcanineWish = "Start your day with a smile on your face and let happiness bloom in your heart!";
BlastoiseWish = "Count the good things in your life and give yourself reasons to be happy.";
CharizardWish = "Your happiness is the most precious!";
AlakazamWish = "Be happy and make everyone around you happy!";
RapidasWish = "May you keep finding reasons to be happy every day!";
MarowakWish = "If you are happy then you don't need anything else but if you are sad then even the best of things cannot bring you happiness in life.";
EeveeWish = "Your gentle smile has the power to spread joy in the world! So be joyful!";
GyaradosWish = "Happiness is not doing fun things. Happiness is doing meaningful things.";
KangaskhanWish = "A happy family raises a happier kid!";
let but1 = document.querySelector(Pikachu);
const pokemonContainer = document.getElementById('pokemon-container');

but1.addEventListener("click",PikaWish)

function PikaWish() {
    var alert1 = function(){
        document.getElementById("PokemonsWish").innerHTML = PikachuWish;
        fetch('https://pokeapi.co/api/v2/pokemon/25')
        //Pikachu
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert1, 1000);
}

function ArcanWish () {
    var alert2 = function(){
        document.getElementById("PokemonsWish").innerHTML = ArcanineWish;
        fetch('https://pokeapi.co/api/v2/pokemon/59')
        //Arcanine
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
}

fetch('https://pokeapi.co/api/v2/pokemon/6')
//Charizard
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/9')
//Blastoise
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/65')
//Alakazam
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/78')
//Rapidas
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/105')
//Marowak
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/115')
//Kangaskhan
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/133')
//Eevee
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/130')
//Gyarados
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));