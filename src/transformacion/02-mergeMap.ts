import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

/*
    el mergeMap recibe un callback q retorna un observable
    mergeMap ==> otro falttening operator, este devuelve un observable, pero no pasa el objeto
    recibido por el mergeMap al subscribe o a otro operador, sino q lo q emiten es el valor interno
    objecto de la subscripcion interna, el mergeMap no tiene limite de subscripciones internas y todas
    pueden estar activas internamente a la misma vez

    el valor de nuestro source observable es recibido por el mergeMap y devuelve un observable

    procedimiento => 

    el source observable emite un valor, el mergeMap lo recibe y emite un observable e internamete
    se suscribe a el, y comienza a emitir valores y esos valores ya si q pasan a la salida o al
    proximo operador y así sucesivamente, el source puede emitir mas valores y el mergeMap
    recibirlos y emitir mas observables y suscribirse a ellos

    cuando se completa la salida final? se deben completar todos los observables internos y el source
    para q todo se complete
*/

const letras$ = of('a', 'b', 'c');


letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i ), 
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('Complete')
// });


const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$   = fromEvent( document, 'mouseup');
const interval$  = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
)
.subscribe( console.log );