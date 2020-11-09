import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

/*
    reduce operator
    its only executed when the Observable has finished emitting all the values
*/

const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer, 0 );
console.log('total arr', total );

interval(500).pipe(
    take(6), // it finishes after 6 emitted values
    tap( console.log ),
    reduce( totalReducer )
)
.subscribe({
    next: val => console.log('next:', val ),
    complete: () => console.log('Complete')
});




