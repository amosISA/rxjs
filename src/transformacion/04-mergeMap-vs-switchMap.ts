import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';



const click$    = fromEvent( document, 'click' );
const interval$ = interval(1000);

// mergeMap acumula subscripciones, mantiene todas las abiertas hasta q acaben
// switchMap solo la ultima subscripcion, cancela las otras, solo mantiene una subscip active interna
click$.pipe(
    switchMap( () => interval$ ),
    // mergeMap( () => interval$ ),
).subscribe( console.log );


