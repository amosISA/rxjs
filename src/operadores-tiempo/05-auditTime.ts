import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

/*
    auditTime => emite el ultimo valor emitido por el observable en un periodo de tiempo determinado

    p ej.: si emite A, entonces espera determinado tiempo (dos segundos), antes de cumplirse esos
    dos segundos se emiten B y C entonces al llegar a 2 segundos se emitiria C
*/

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    map( ({ x }) => x ),
    tap(val => console.log('tap', val) ),
    auditTime(5000)
).subscribe( console.log );