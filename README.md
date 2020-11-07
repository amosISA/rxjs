# Testing RxJS with TypeScript

* Observable (Subscriber, Observer, Subscription)
* Subject (all the subscriptions get the same values, they act also as Observers)
* RxJS Operators
* Cold and Hot Observables

Cold ones produce data inside the Observable, and the hot ones helps us to produce
data outside them (we reach this with Subject())

* Functions to create Observables: 

of => if we want to emit numbers, or strings, or whatever, they are emitted synchronous

fromEvent => we create Observables from events, imagine we want to cache every value every time
we want to scroll, every time we scroll, we get values

range => emit a sequence of numbers in base to their range, by default they are synchronous, but they
can be transformed to async with asyncScheduler

interval

timer

asyncScheduler