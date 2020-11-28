import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';

/*

    concatMap => tmb es un observador de flattening y por lo tanto este operador
    al recibir un observable, este operador automaticamente se subscribe a el

    pero q hace el concatMap? el nuevo observable interno espera a q el observable anterior interno 
    se haya completado para ejecutarse el
*/

const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );

click$.pipe(
    concatMap( () => interval$ )
)
.subscribe( console.log );