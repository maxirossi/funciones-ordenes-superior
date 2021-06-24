/*  map examples 1*/

let pokemons = [
    { name: "pikachu", type: "electric"},
    { name: "charmander", type: "fire"},
    { name: "bulbasaur", type: "grass"},
    { name: "squirtle", type: "water"},
    { name: "flareon", type: "fire"},
    { name: "jolteon", type: "electric"}
];

/*
let names = [];
for (var i = 0; i < pokemons.length; i++){
 names.push('name of pokemon = ' + pokemons[i].name);
}
*/

/*
let names = pokemons.map(function(pokemon, i){
    if (i == 3){
        return pokemon;
    }else{
        return null;
    }
});
*/

/*
// Jose espinoza
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.map(function(num) { console.log(num*3); });
// pascal
const numeros3 = numeros.map( numero => numero * 3); 
// Anna Aleinikova
let arr = [1, 3, 5, 10]; 
let multipliedArr = arr.map((element) => 
{ return element * 3; }); 
*/

//console.log('names =>', pokemons[2].name);

/*
let names = pokemons.map(function(poke){
    return 'name of pokemon =>' + poke.name 
});
*/

/* con arrow function => 
let names = pokemons.map((poke) => {
    return 'name of pokemon =>' + poke.name 
});
/* con traditional function 
let names = pokemons.map(function(poke){
    return 'name of pokemon =>' + poke.name 
});
*/

//pokemons.map(poke => (console.log('name of pokemon => ' + poke.name)));


// Durations are in minutes
 
let tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];


let new_tasks = tasks.map((taskElement) => {
    return taskElement.duration + 10;
});

let numbers = [1,2,3,4,5,6,7,8,9,10];
let newNumbers = numbers.map(multiplicar);
let otherNewNumbers = numbers.map((n) => {
    return multiplicar_otro_ejemplo(n, -1);
});

//console.log('otherNewNumbers =>', otherNewNumbers);

function multiplicar(n){
    return n * 10;
}

function multiplicar_otro_ejemplo(n, n2){
    return n * n2;
}
