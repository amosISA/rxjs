import { Observable, Observer } from 'rxjs/';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.log('completed')
};

const intervalo$ = new Observable<number>(subscriber => {
    // every sec, emit 1,2,3,4.....
    let counter = 0;
    const interval = setInterval(() => {
        counter++;
        subscriber.next(counter);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    // This is the return of the observable
    // It is executed when we call unsubscribe
    return () => {
        clearInterval(interval);
        console.log('interval destroyed!');
    }
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    /* subscription2.unsubscribe();
    subscription3.unsubscribe(); */
    console.log('completed timeout');
}, 6000);