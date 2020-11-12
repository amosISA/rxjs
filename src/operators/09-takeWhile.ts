import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';



const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    map( ({ x, y }) => ({x,y}) ),

    // with this one, the condition that completes the takeWhile is not emitted
    // takeWhile( ({ y })=> y <= 150 )
    
    // what if i need the condition that completes the takeWhile? we can pass other argument => true
    // last takeWhile argument emit the condition that completes the takeWhile
    takeWhile( ({ y })=> y <= 150, true )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
});