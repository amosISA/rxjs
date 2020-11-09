import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/* range(1,10).pipe(
    filter(val => val % 2 === 1)
).subscribe(console.log); */

range(1,50).pipe(
    filter((val, indx) => {
        console.log('index: ', indx);
        return val % 2 === 1;
    })
).subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
};
const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

from(personajes).pipe(
    filter(val => val.tipo === 'heroe')
).subscribe(console.log);

// Encadenamiento
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
);
keyup$.subscribe(console.log);