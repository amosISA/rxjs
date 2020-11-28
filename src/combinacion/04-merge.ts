import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

/*
    merge => recibe uno o más obs y el resultado es la combinación de ellos
    si recibe dos obs, si el 1 emite a se emite a, si se emite b se emite b y cuando
    todos los obs se completan se dispara el complete

    el operador merge esta obsoleto, usamos la función
*/

const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge( 
    keyup$.pipe( pluck('type') ), 
    click$.pipe( pluck('type') )
).subscribe( console.log );
