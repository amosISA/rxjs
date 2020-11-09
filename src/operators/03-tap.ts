import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const numbers$ = range(1,5);
numbers$.pipe(
    // tap helps us to debug
    tap(x => {
        console.log('before', x);
        return 100; // it doesnt matter, it does not alter the value of tap
    }),
    map(val => val * 10),
    tap({
        next: val => console.log('after', val),
        complete: () => console.log('everything completed!')
    })
).subscribe(val => console.log('subs: ', val));