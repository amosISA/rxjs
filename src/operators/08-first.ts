import { first, map, take, tap } from 'rxjs/operators';
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
    tap<MouseEvent>(console.log),
    /* map(event => ({
        clientY: event.clientY,
        clientX: event.clientX
    })) */

    map( ({clientX, clientY }) => ({
        clientY,
        clientX
    })),

    first(event => event.clientX >= 150)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('completed')
});