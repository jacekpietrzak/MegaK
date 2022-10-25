// Java Script to jezyk wysokiego poziomu. To oznacza ze jest daleko od jezyka maszynowego (0, 1).

/** Mozliwe pytanie na rozmowie rekrutacyjnej */
// Typowanie
// Statyczne, dynamiczne
/**
 * statyczne - na etapie pisania kodu
 * dynamiczne - na etapie wywolywania kodu (przez silnik czy interpreter)
 */

let userName = "jakub"; // w tym momencie nie okreslilismy ze jest to zmienna typu string. W JS ten typ zostanie nadany dopiero kiedy ten kod zostanie wywolany.
//W innych jezykach programowania gdzie jest typowanie statyczne to juz na etapie pisania kodu powiedzielibysmy co to jest za typ zmiennej.

// gdy tekst czyli string
/* let string userName = "jakub";*/
// gdy liczba czyli integer
/* let int userAge = 22;*/

// Silne, slabe
"22" == 22; // W JS nie ma problemu z napisaniem czegos takiego. W tym momencie dojdzie do niejawnej konwersji. Ktorys z tych elementow zamieni sie albo na liczbe albo na stringa aby moglo dojsc do porownania.
// slabe typowanie oznacza ze mamy tutaj niejawna konwersje
userAge = true; // mozemy takie cos zrobic poniewaz w JS mozemy zmieniac typ przechowywanej zmiennej. W jezykach silnie typowanych to byloby juz niemozliwe.

console.log("hello, world!");
console.log(Math.round(3.14));
console.log(Math.floor(3.14));
console.log(Math.ceil(3.14));
