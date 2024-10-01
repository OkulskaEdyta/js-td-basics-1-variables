/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarez les variables now, ageJohn, ageMark, yearJohn et yearMark, puis affectez aux trois premières les valeurs 2019, 28 et 33.
let now = 2019;
let ageJohn = 28;
let ageMark = 33;
let yearJohn;
let yearMark;

// Opérateurs mathématiques

// 2. Affectez à yearJohn sa date de naissance (en la calculant à partir de l'année courante et de son âge). Faites de même pour yearMark. Ensuite, affichez la date de naissance de John et "Mark est né en …".
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(`John est né en ${yearJohn}.`);
console.log(`Mark est né en ${yearMark}.`);

// 3. Affichez l'année à laquelle nous serons dans deux ans, le double de l'année et le dixième de l'année.
let dsDeuxAns = now + 2;
let double = now * 2;
let dixieme = now / 10;

console.log(dsDeuxAns);
console.log(double);
console.log(dixieme);

// Opérateurs logiques

// 4. … (Veuillez préciser votre question ou vos actions ici)
let isJohnOlder = ageJohn > ageMark;
console.log(`Jogn est-il plus âgé que Mark? ${isJohnOlder}`)

// Opérateur typeof
console.log(typeof now);
console.log(typeof ageJohn);
console.log(typeof yearJohn);
console.log(typeof isJohnOlder);

