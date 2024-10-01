/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
const poidMark = 50;
const poidJohn = 103;

const tailleMark = 1.75;
const tailleJohn = 1.8;


// 2. Calculez le BMI de chacun.
const bmiMark = poidMark / (tailleMark*tailleMark);
const bmiJohn = poidJohn / (tailleJohn*tailleJohn);


// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
//const isMarkBiggerThanJohn = bmiMark > bmiJohn;
//console.log("Est-ce que le BMI de Mark est plus élevé que celui de John ? " + isMarkBiggerThanJohn);
//console.log(`Est-ce que le BMI de Mark est plus élevé que celui de John ${isMarkBiggerThanJohn}`);
//    Mark est plus élevé que celui de John ? true"
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de


//    Mark est plus élevé que celui de John ? true").
const isMarkBiggerThanJohn = bmiMark > bmiJohn;

if (isMarkBiggerThanJohn) {
    console.log('Mark a u BMI plus élevé que celui de John.');
    if (bmiMark < 18) {
        console.log('Mark (bmi <18) : ' + Math.trunc(bmiMark));
    }   else {
            if (bmiMark < 25 ) {
                 console.log('Mark (bmi <25) : ' + Math.trunc(bmiMark));
         } else {
             if (bmiMark < 35) {
                 console.log('Mark (bmi <35) : ' + Math.trunc(bmiMark));
            }
        }
    }

    console.log('Mark BMI : ' + (bmiMark));
    console.log('Mark BMI : ' + Math.trunc(bmiMark));
    console.log('Mark BMI : ' + Math.ceil(bmiMark));
    console.log('Mark BMI : ' + Math.floor(bmiMark));
} else {
    console.log('John a u BMI plus élevé que celui de Mark.');
    console.log('John BMI : ' + Math.trunc(bmiJohn));

    switch (bmiJohn) {
        case (bmiJohn<18):
                 console.log('Mark (bmi <25) : ' + Math.trunc(bmiJohn));
                 break;
        case (bmiJohn<25) :
                 console.log('Mark (bmi <25) : ' + Math.trunc(bmiJohn));
    }
}

//} else {
//    if (poidJohn>100) {
//    console.log('John a u BMI plus élevé que celui de Mark.');
 //   }

// BONNE CHANCE 😀
