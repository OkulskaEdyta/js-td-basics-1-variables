// Prédiction de résultat
/*
Affichez dans la console le résultat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/

// Cas 1 : 4 et 5 sont toutes deux de type nombres
const myNumber=  4  +  5;
console.log(myNumber)

// Cas 2 : 4 et 5 sont toutes deux de type chaîne
const myNumber2=  " 4 "  + " 5 ";
console.log(myNumber2)

// Cas 3 : 4 est de type chaîne et 5 est de type nombre
const myNumber3=  " 4 "  +  5 ;
console.log(myNumber3)

// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets

// Faux : const myNumber4=  " 4 "  + " 5 ";
// Faux : console.log(`${myNumber4} \"4" \"5"`);

console.log("\"" + a + "+" + b + "=" + a + b + "\"");
console.log(`"${b} = ${a+ b}"`);

// resultat affiché : "4 + 5 = 9"