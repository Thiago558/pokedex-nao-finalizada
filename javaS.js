let img = document.getElementById('foto')
let nome = document.getElementById('nome')
let id = document.getElementById('id')
let pokemon = document.getElementById('pokemon')
let buscar = document.getElementById('buscar')
let teste = document.getElementById('teste')

buscar.addEventListener('click', ()=>{



    fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.value)
    .then(response=>{
        return response.json()
    })


    .then(data=>{
        console.log(data)
        fetch()
        img.src=data.sprites.other['official-artwork'].front_default
        nome.innerHTML = data.name
        teste.innerHTML = data.abilities[0].ability.name
        id.innerHTML= data.id
    })
    
    .catch(error=>{
        console.log(error)
    })

})