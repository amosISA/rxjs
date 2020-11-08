import { asyncScheduler } from 'rxjs';

/*
    asyncScheduler => this does not create an Observable, it creates a subscription,
    and a subscription is the product of a Subscriber (.subscribe() => generates a Subscription)
    and it emulates setInterval and setTimeout
*/

// Our asyncScheduler emulates this both async operations
/* setTimeout(() => {}, 1000);
setInterval(() => {}, 1000); */

const salute = () => console.log('Hello World');
const salute2 = name => console.log('Hello World: ' + name);
const salute3 = (name: string, surname: string) => console.log('Hello World: ' + name + ' ' + surname);

// EMULATE setTimeout
// This means its async
// It takes a function and executes it on 2 secs
console.log('Start:');
asyncScheduler.schedule(salute, 2000);
console.log('End');

//asyncScheduler.schedule(salute2, 4000, 'Amos'); // The third parameter is the farameter from func salute2
// asyncScheduler.schedule(salute3, 6000, { name: 'Amos', surname: 'Isaila' });

// EMULATE setInterval => it cannot be arrow function
const subs = asyncScheduler.schedule(function(state) {
    console.log('state: ', state);
    this.schedule(state + 1, 1000); // converts it into setInterval
}, 1000, 0);

// As asyncScheduler return a Subscription (from subscribe()) we can cancel it
/* setTimeout(() => {
    subs.unsubscribe();
}, 6000); */

// Other form to cancel it
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);