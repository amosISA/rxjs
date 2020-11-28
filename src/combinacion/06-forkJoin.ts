import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

/*
    forkJoin => función q recibe varios obs como argumentos, esos obs son independientes
    el uno del otro y son finitos y por lo tanto el source emite cuando todos los obs internos
    se completen, y retorna el último valor de cada obs interno
*/

const numeros$   = of(1,2,3,4);
const intervalo$ = interval(1000).pipe( take(3) ); //0..1..2 
const letras$    = of('a','b','c').pipe( delay(3500) );

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe( console.log  )

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe( resp => {
//     console.log('numeros: ', resp[0] )
//     console.log('intérvalo: ', resp[1] )
//     console.log('letras: ', resp[2] )
// });

// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$
// }).subscribe( resp => {
//     console.log(resp)
// });

forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe( resp => {
    console.log(resp)
});


