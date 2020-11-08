import { of, range, asyncScheduler } from 'rxjs';

/*
    range => emit a sequence of numbers in base to their range, by default they are synchronous, but they
    can be transformed to async with asyncScheduler
*/

// This code is synchronus
console.log('start');
const obs$ = of(1,2,3,4,5,6,7);

obs$.subscribe(console.log);

const obs2$ = range(1,100); // this means =>  from 1 emit 100 values
obs2$.subscribe(console.log);
console.log('end');

// What if we dont specify values?, he just completes
// const obs3$ = range();
const obs3$ = range(5); // by default is 0
obs3$.subscribe(console.log);

// We can transform of and range to asynchronous with asyncScheduler
console.log('async start');
const obs4$ = range(1, 5, asyncScheduler); // this asyncScheduler is and schedulerLike
obs4$.subscribe(console.log);
console.log('async end');