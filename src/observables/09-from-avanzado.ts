import { of, from } from 'rxjs';

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('completed!')
};

/* const source$ = from([1,2,3,4,5]);
source$.subscribe(observer);

// to get same result as from we can use ...[1,2,3,4,5]
const source2$ = of([1,2,3,4,5]);
source2$.subscribe(observer); */

/* const source$ = from('Amos'); 
source$.subscribe(observer); */ // next: A, next: m... si quisieramos todo el nombre con of('Amos')

// El from nos permite tomar casi cualquier cosa y convertirla en un Observable
// Convertimos una promesa (con fetch) a un observable
const source$ = from(fetch('https://api.github.com/users/klerith'));
source$.subscribe(async (response) => {
    const dataResp = await response.json();
    console.log(dataResp);
});

// from con ITERABLES
/* El generador se define con el asterisco y yield es lo q devuelve */
const miGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerator();
from(miIterable).subscribe(observer);