import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

/*
    distinctUntilChanged => se diferencia de distinct, en q emite valores siempre y cuando
    la emision anterior no sea la misma

    ej: 1,2,2,1,3 => esto emite => 1,2,1,3 => el 1 se vuelve a emitir pq el 1 no es igual a 2 (el anterior)

    tmb usa el ===
*/

const numeros$ = of<number|string>(1,'1',1,3,3,2,2,4,4,5,3,1, '1' );

numeros$.pipe(
    distinctUntilChanged()
).subscribe( console.log );

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
    // if previous === actual => true si lo quiero bloquear, if false lo dejo pasar
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
).subscribe( console.log );



