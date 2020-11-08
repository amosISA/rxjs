import { fromEvent } from 'rxjs';

/*
    fromEvent => we create Observables from events, imagine we want to cache every value every time
    we want to scroll, every time we scroll, we get values
*/

// DOM Events
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next: ', val)
};

src1$.subscribe(({ x, y}) => {
    console.log(x, y);
});
src2$.subscribe(event => {
    console.log(event.key);
});