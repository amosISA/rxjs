import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

/*
    takeUntil => sigue recibiendo los valores y sigue emitiendolos hasta q el otro observable
    emita su valor

    skip => depende de lo q le pongas, omite las x primeras veces de emitir valores
            y luego emite
*/

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );


const counter$  = interval(1000);
// const clickBtn$ = fromEvent( boton, 'click' );
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    // i have to click twice to end my counter
    tap( () => console.log('tap antes de skip') ),
    skip(1),
    tap( () => console.log('tap después de skip') ),
)

/*
    I keep receiving values until I click my button
*/
counter$.pipe(
    takeUntil( clickBtn$ )
).subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
});