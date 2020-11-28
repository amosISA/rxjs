import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

/*
    startWith => antes de hacer la emisión, emite lo q hay en el startWith y luego lo otro
    endWith => antes de q haga el complete, una vez todo se ha emitido, emite lo q haya dentro
    del endWith
*/

const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'), // esto aparece antes pq el of es sincrono
    endWith('x','y','z'),
);

numeros$.subscribe( console.log );
