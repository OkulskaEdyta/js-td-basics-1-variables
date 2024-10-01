// Permutation de variables

// Solution classique utilisant une variable temporaire

// Solution alternative valable uniquement pour des nombres
/*
// Échange de nombre1 et nombre2 sans variable temporaire
*/


let a = 4;
let b = 5;

let c;

c = a;
a = b;
b = c;

[a,b] = [b,a];