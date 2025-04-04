async function fetchData() {                        
    try {
        const respond = await fetch ('https://pokeapi.co/api/v2/pokemon/?limit=10');            //fetch ALL the info for 10 pokemons
        const data = await respond.json();
        pokemonList(data.results);
    }
    catch(error)
    {
        console.log("Error:", error);
    }
}

function pokemonList(info) {
    const listPokemon = document.getElementById('select');      

    info.forEach(data => {                                                  
        const allPokemon = document.createElement('option');
        allPokemon.value = data.url;                          // <option> has value, which is basically like an ID for each option 
        allPokemon.innerHTML =  data.name.charAt(0).toUpperCase() + data.name.slice(1);
        
        listPokemon.appendChild(allPokemon);            //adds to the  allPokemon 
});

        let isOpen = false;
        select.addEventListener('mousedown', () => {
            isOpen = true;
            select.style.fontSize = '16px';
        });

    
        document.addEventListener('click', (e) => {
                select.style.fontSize = '40px';
        });

     select.addEventListener('change', async(e) => {
        isOpen = false;
        select.style.fontSize = '40px';
        const selectedPokemon = e.target.value;
        
        if (selectedPokemon)
        {
           try{ const fetchedData = await fetchpokemonDetail(selectedPokemon);
            displaySelectedPokemon(fetchedData);
           }
           catch(error)
        {
            console.log("Error fetching details:", error);
                document.getElementById('pokemonDetail').innerHTML = `<p>Error loading Pokemon</p>`
        }
        }
    });
}

async function fetchpokemonDetail(selectedPokemonURL) {
    const respond = await fetch (selectedPokemonURL)
    return await respond.json();
}

function displaySelectedPokemon(selectedPokemon) 
{
    const display  = document.getElementById('pokemonDetail');

    if(!selectedPokemon)
    {
            display.innerHTML = `<p>Error</p>`;
    }
    else
    {
        display.innerHTML = `<img src="${selectedPokemon.sprites.front_default}" alt="${selectedPokemon.name}">
                                              <div class="pokemonStats">  ${selectedPokemon.stats.map(stat => `                       
                                                    <p>${stat.stat.name}: ${stat.base_stat}</p>
                                                    `).join('')}
                                                </div>
        `;
    
}
}

// .map transform data

fetchData();