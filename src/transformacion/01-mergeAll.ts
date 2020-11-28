import { fromEvent, Observable,  } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';


/*

    mergeAll ==> internamente retorna Observables
    1.Si nuestro source emite otro Observable, tendríamos otra línea
    2. el inner observable emite valores, al acabar nuestro source emite otro
    observable y este inner emite otros valores, y así hasta q nuestro source pare de emitir
    
    Por tanto, el mergeAll está suscrito a todos esos inner observables, cuando emiten,
    el mergeAll va sacando valores y por tanto el mergeAll se completa cuando todos los
    observables hijos del source se hayan completado

    ** Este procedimiento de unificar Observables en una única salida se conoce como:
        FLATTENING OPERATOR (operador de aplanamiento)

    ** Se trata de un Higher-Order Observable (Un observable source q devuelve observables)
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
    debounceTime<KeyboardEvent>(500), // espero a acabar de escribir o hasta q pasen 500 milisegundos
    pluck<KeyboardEvent, string>('target','value'),
    map<string, Observable<GithubUsersResp>>( texto => ajax.getJSON( // map emite un Observable
        `https://api.github.com/search/users?q=${ texto }`
    )),
    mergeAll<GithubUsersResp>(),
    pluck<GithubUsersResp, GithubUser[]>('items')
).subscribe( mostrarUsuarios );

