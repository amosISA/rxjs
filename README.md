# Testing RxJS (JavaScript Reactive Extensions) with TypeScript

* Observable (Subscriber, Observer, Subscription)
* Subject (all the subscriptions get the same values, they act also as Observers)
* RxJS Operators
* Cold and Hot Observables

Cold ones produce data inside the Observable, and the hot ones helps us to produce
data outside them (we reach this with Subject())

* Functions to create Observables: of, from, fromEvent, range, interval, timer

* Basic operators: map, pluck, mapTo, filter, tap, reduce, scan

* Other basic operators: take, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged,
distinctUntilKeyChanged

* Time operators: debounceTime, throttleTime, sampleTime, sample, auditTime