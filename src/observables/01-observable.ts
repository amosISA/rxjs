import { Observable, Observer } from 'rxjs/';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: () => console.log('error'),
    complete: () => console.log('completed')
};

// Types of creating Observable

// Less common
// const obs$ = Observable.create();

// More common
// subs => is my Subscriber object
const obs$ = new Observable<string>(subs => {
    subs.next('amos');
    subs.next('isaila');
    subs.complete();
    subs.next('this wont appear');
});

// This subscribe() => process my Subscriber object from above, how? with my Observer => 3 callbacks
obs$.subscribe(
    value => console.log('next: ', value),
    err => console.error('error: ', err),
    () => console.log('COMPLETED!')
);

// Another form with my Observer
obs$.subscribe(observer);