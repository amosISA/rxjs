import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

/*

    el switchMap recibe un callback q retorna un observable y se suscribe a este nuevo observ
    para hacer la emisión en la salida, el switchMap se suscribe inmediatamente a el y los valores
    q emitan salen directamente

    pero es igual al mergeMap, en q se diferencian??? el switchmap se suscribe y comeinza a emitir
    valores de los observables internos cuando el anterior observable interno se haya completado
    y así sucesivamente hasta q se completen todos y el source tmb se complete!

    en el mergeMap todas las subscripciones internas permanecen activas hasta q se completen, pero
    en el mergeMap si emitimos 3 peticiones ajax, y solo nos interesa la ultima, podemos cancelar
    las 2 anteriores, en el mergeMap permanecerian abiertas
*/

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ) {

        const li  = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    }

}



// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target','value'),
    mergeMap<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${ texto }`
    )),
    pluck<GithubUsersResp, GithubUser[]>('items')
);//.subscribe( mostrarUsuarios );

const url = 'https://httpbin.org/delay/1?arg='; // + fernando


// aqui cuando escribo mi nombre, por cada letra se dispara la peticion (con el mergeMap), 
// pero con el switchMap solo se dispara cuando acabo de escribir, una única petición, las demás se 
// cancelan
input$.pipe(
    pluck('target','value'),
    switchMap( texto => ajax.getJSON(url + texto)  )
).subscribe( console.log );













