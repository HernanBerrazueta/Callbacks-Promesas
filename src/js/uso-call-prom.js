import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId1 = 'batman';
const heroeId2 = 'spiderman';

Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2) ])
    .then(([ heroe1, heroe2 ]) => {
        console.log(`enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
}).catch( err => {
    alert(err);
}).finally( () => {
    console.log('Se terminó el promise.all');
})


