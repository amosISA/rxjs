import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

/*
    exhaustMap ==> tmb flattening operator q recibe un callback q se subscribe auto a un observable

    si llega mi primera subscripcion interna y aun no se ha completado y me llega otro observable
    interno este nuevo el exhaustmap la ignora, y solo mantiene una subscripcion activa, la antigua

    si ya tiene una interna activa, todo lo demas lo ignora pero si acaba y entra una nueva, entonces
    coge esa nueva

    el exhaustMap es util para cuando haces click en un boton de formulario para deshabilitarlo
*/


const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );

click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe( console.log );
