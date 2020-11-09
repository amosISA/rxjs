import { from } from 'rxjs';
import { scan, reduce, map } from 'rxjs/operators';

/*
    scan its similar tu reduce, but acc its returned every time 
*/

const numbers = [1,2,3,4,5];

const totalAccumulator = (acc, cur) => acc + cur;

// Reduce => return final value
/* from(numbers).pipe(
    reduce(totalAccumulator, 0)
).subscribe(console.log); */

// Scan => return everytime for every emitted value
from(numbers).pipe(
    scan(totalAccumulator, 0)
).subscribe(console.log);

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
};

const user: Usuario[] = [
    {
        id: 'fher',
        autenticado: false,
        token: null
    },
    {
        id: 'fher',
        autenticado: true,
        token: 'ABC'
    },
    {
        id: 'fher',
        autenticado: true,
        token: 'ABC123'
    }
];

const state$ = from(user).pipe(
 scan<Usuario>((acc, cur) => {
     return { ...acc, ...cur }
 }, { edad: 33 })   
);

const id$ = state$.pipe(
    map(state => state)
).subscribe(console.log);