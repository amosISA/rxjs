# Testing RxJS with TypeScript

* Observable (Subscriber, Observer, Subscription)
* Subject (all the subscriptions get the same values, they act also as Observers)
* RxJS Operators
* Cold and Hot Observables
Cold ones produce data inside the Observable, and the hot ones helps us to produce
data outside them (we reach this with Subject())

* Functions to create Observables: of, fromEvent, interval, timer, asyncScheduler