import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

/*
    distinctUntilKeyChanged => he is aware of the key inside some object, if that key is
    equal to previous key, it wont emit, if not, it emits
*/

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
];

from( personajes ).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe( console.log );