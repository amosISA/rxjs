import { interval, concat, of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

/*
    concat => no es el operador pq está obsoleto, es la función de rxjs
    recibe Observables como argumento y crea un nuevo Observable
    p ej si el obs1 emite A, el obs2 no se ejecuta hasta q obs1 se haya completado del todo,
    por tanto van de uno en uno // los concatena todo
*/

const interval$ = interval(1000);

concat(
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    of(1)
).subscribe( console.log  )
