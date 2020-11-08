import { interval, timer } from 'rxjs';

/*
    interval => async Observable by default => emits values in the specified time
    timer => async Observable by default => start emitting when passes the seconds you put
*/

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('completed!')
};

// this code means its async
/* console.log('im async starter');
const obs$ = interval(2000);
obs$.subscribe(observer);
console.log('im async end'); */

// this code means its async
/* console.log('im async starter');
const timer$ = timer(2000);
timer$.subscribe(observer);
console.log('im async end'); */

// But how to start emitting in two secs and keep emitting in each sec?
// This after 2 secs emits values, and then emits values one by one each sec (its creates interval)
const timer2$ = timer(2000, 1000);

// with timer we can create a custom time notification
// we emit value from now + 5 seconds
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer3$ = timer(hoyEn5);
timer3$.subscribe(observer);