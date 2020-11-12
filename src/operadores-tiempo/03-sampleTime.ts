import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

/*
    sampleTime => emite el ultimo elemento dentro de ese rango de tiempo
*/

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    sampleTime(2000),
    map( ({ x, y }) => ({ x, y }) ),
).subscribe( console.log );