

function convertPokemonToli(pokemon){

    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">

            </div>
        </li>

    `
}

// criando requisições http com js
const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {

    const newlist = pokemons.map(convertPokemonToli).join('');
    pokemonList.innerHTML += newlist;
})

