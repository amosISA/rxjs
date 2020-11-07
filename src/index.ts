import { Observable, Observer, Subject } from 'rxjs/';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.log('completed')
};

const intervalo$ = new Observable<number>(subs => {
    // Cold Observable
    const intervalID = setInterval(() => subs.next( Math.random() ), 1000);

    return () => {
        // We only call this when we unsubscribe
        clearInterval(intervalID);
        console.log('destroyed interval');
    }
});

/* const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd)); */

/*
    Subject features:
    1. Multi subscriptions, same values, if I have tow subscriptions, both of them are going
    to get the same values from the subscriber, si lo hago de la otra forma, crearme dos variables
    con el new Observable... van a emitir valores diferentes como en el ejemplo de arriba, pero
    con el Subject, todos recibirán (los .subscribe()) los mismos valores

    2. Es un observer

    3. Tmb maneja el next, error y complete

    Our Subject helps us to transform Cold Observable (cuando la data es producida dentro del Observable)
    to into hot Observable (data is produced oustide Observable)
*/

// Here we use our Subject as Observer (number 2 feature)
const subject$ = new Subject();
const intervalSubject = intervalo$.subscribe(subject$);

// How this can be useful??, WE GET THE SAME VALUES IN BOTH SUBSCRIPTIONS!!
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    // Como nuestro subject tmb es un observer, tmb podemos usar sus métodos: next, error, complete
    // And so every 3,5 secs we send
    // Hot Observable
    subject$.next(10);
    subject$.complete();
    intervalSubject.unsubscribe();
}, 3500);