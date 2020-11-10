import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

/*
    take => emits x values, and stops emitting, so the Observable completed with x times
*/
const obs$ = of(1,2,3,4,5)
.pipe(
    tap(console.log)
);

obs$.pipe(
    tap(console.log),
    take(3)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('completed')
});