import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

/*
    throttleTime => cuando emite empieza a contar el tiempo q le hemos puesto, si le hemos 
    puesto 1 segundo, y sale A antes del segundo, al llegar al segundo sale A, luego si llega B
    y C antes del otro segundo los va a ignorar y al llegar el otro segundo lo q sea emitido luego
    es lo q se emite

    es lo opuesto a debounceTime, emite despues de completar el tiempo
*/

const click$ = fromEvent( document, 'click' );

click$.pipe(
    throttleTime(3000)
)//.subscribe( console.log );

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );


const input$ = fromEvent( input, 'keyup' );

input$.pipe(
    // el asyncScheduler hace falta para el tercer argumento
    throttleTime(400, asyncScheduler, {
        leading: false, // si quiero el primer elemento, sino lo omite (false)
        trailing: true // si quiero el ultimo elemento, sino lo omite (false)
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe( console.log );