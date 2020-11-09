import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1,5).pipe(
    map<number, number>(val => {
        // map helps us manipulate values
        // if we dont put return we get undefined, or we can specify its type
        return val * 10
    })
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(val => {
        return val.code;
    })
);

const keyupPluck$ = keyup$.pipe(
    // plucks helps us to get some property from object { key: 7 }, so we get 7
    // pluck('key')

    // How about if we want to get a property from a nested object?
    /*
        const obj = {
            hi: 'amos',
            target: {
                baseURI: 'asdfasdfsadf'
            }
        };

    */
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    // map to whatever value we want
    mapTo('pressed key')
);

keyupCode$.subscribe(code => console.log('map: ', code));
keyupPluck$.subscribe(code => console.log('pluck: ', code));
keyupMapTo$.subscribe(code => console.log('mapTo: ', code));

