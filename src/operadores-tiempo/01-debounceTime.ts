import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

/*
    debounceTime => si ponemos q nuestro debounce emita valores cada 1 segundo,
    si en 0,7 secs me llega A, entonces al cumplirse un segundo emite A, si en menos
    del otro segundo llega B y C, al cumplirse el otro segundo emitirá C, el último en llegar,
    y así sucesivamente

    útil para controlar observables q emiten una gran cantidad de mensajes
*/

const click$ = fromEvent( document, 'click' );

click$.pipe(
    debounceTime(3000)
); //.subscribe( console.log );

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent( input, 'keyup' );

input$.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe( console.log );