function numPoke() {
    let numPoke = document.getElementById("num").value;

    fetch('https://pokeapi.co/api/v2/pokemon/' + numPoke)
        .then(response => response.json())
        .then(data => {
            console.table(data);
            document.getElementById('nomePoke').innerText = data.name;
            document.getElementById('poke').src = data.sprites.front_default;
        });

}