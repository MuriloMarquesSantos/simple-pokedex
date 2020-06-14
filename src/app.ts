const container: HTMLElement | any = document.querySelector(".app");
const pokemons: number = 151;

interface Pokemon {
    id: number,
    name: string,
    image: string,
    type: string
}

interface PokemonResponse {
    id: number,
    name: string,
    sprites: {
        front_default: string
    },
    types: TypeContainer[]
}

interface TypeContainer {
    type: {
        name: string
    }
}

const fetchData = async (): Promise<void> => {
    console.log(pokemons);
    let pokemonGroup: Pokemon[] = [];
    for (let i = 1; i <= pokemons; i++) {
        const pokemon = await getPokemon(i);
        pokemonGroup.push(pokemon);
    }
    pokemonGroup.sort(function(a, b) {
        return a.id - b.id
    });
    pokemonGroup.forEach(pokemon => showPokemon(pokemon));
}

const getPokemon = async (id: number): Promise<Pokemon> => {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon: PokemonResponse = await data.json();
    const pokemonType: string  = pokemon.types.map((typeContainer: TypeContainer) => {
        return typeContainer.type.name
    }).join(", ");

    const transformedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: `${pokemon.sprites.front_default}`,
        type: pokemonType
    }

    return transformedPokemon;
}

const showPokemon = (pokemon: Pokemon): void => {
    let output: string = `
        <div class="card ${pokemon.type}">
            <span class="card--id">#${pokemon.id}</span>
            <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
            <h1 class="card--name">${pokemon.name}</h1>
            <span class=card--details">${pokemon.type}</span>
    `
    container.innerHTML += output;
}

const createFilters = () => {
    const cards = document.querySelectorAll(".card");
    const selectFilter = document.querySelector(".typesFilter") as HTMLSelectElement;

    selectFilter?.addEventListener("change", () => {
        let selectedIndex = selectFilter.selectedIndex;
        const selectedValue = selectFilter.options[selectedIndex].value;
        cards.forEach(card => {
            if (card.classList.contains(selectedValue) || card.classList.contains(selectedValue+",")) {
                card.classList.remove("hidden");
                card.classList.add("show");
            } else {
                card.classList.remove("show");
                card.classList.add("hidden");
            }

            if (selectedValue === "clear") {
                card.classList.add("show");
            }
        })
    })
}

fetchData()
    .then(createFilters);