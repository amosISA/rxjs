import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';

/*
    sample => emite el último valor emitido por el observable hasta q el otro
    observable dentro del operador sample, emita un valor, acaba cuando se complete
    el primer observable

    es una combinación de ambos
*/

const interval$ = interval(500);
const click$    = fromEvent( document, 'click' );

interval$.pipe(
    sample(click$)
).subscribe( console.log );