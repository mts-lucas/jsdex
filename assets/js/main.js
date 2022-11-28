function convertPokemonToli(pokemon){

    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">poison</li>
                    <li class="type">grass</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}">

            </div>
        </li>
        `
}

// criando requisições http com js
const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonToli).join('');
})

