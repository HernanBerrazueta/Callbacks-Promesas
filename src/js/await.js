import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi','batman','spiderman'];
const heroesPromesas = heroesIds.map( buscarHeroe );

export const obtenerHeroesArr = async () => {

    const heroesArr = [];

    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }

    return heroesArr;
}

export const obtenerHeroesAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        console.log('CATCH!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }
}

export const heroesCiclo = async () => {
    console.time('heroes ciclo');

    for await (const heroe of heroesPromesas){
        console.log(heroe);
    }

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));

    console.timeEnd('heroes ciclo');
}

export const heroeIfAwait = async (id) => {
    if((await buscarHeroeAsync(id)).nombre === 'Batman'){
        console.log('Es el mejor de todos');
    } else {
        console.log('Naa');
    }
}