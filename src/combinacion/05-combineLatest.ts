import { fromEvent, combineLatest, from } from 'rxjs';
import { pluck } from 'rxjs/operators';

/*
    combineLatest => es una función q nos permite mandar obs como argumentos, combinarlos
    y emitir los valores de todos los obs internos simultaneamente, p ej si tengo
    dos obs, el 1 emite, y hasta q el 2 no emita no se emite el valor combiando
*/

// const keyup$ = fromEvent( document, 'keyup');
// const click$ = fromEvent( document, 'click');

// combineLatest( 
//     keyup$.pipe( pluck('type') ), 
//     click$.pipe( pluck('type') )
// ).subscribe( console.log );

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '*********';
input2.type = 'password'

document.querySelector('body').append(input1, input2);


// Helper
const getInputStream = ( elem: HTMLElement ) => 
    fromEvent<KeyboardEvent>( elem, 'keyup' ).pipe(
        pluck<KeyboardEvent,string>('target','value'));


combineLatest(
    getInputStream( input1 ),
    getInputStream( input2 ),
).subscribe( console.log )
