const heroes = {
    capi: { //este es el id
        nombre: 'Capitan America',
        poder: 'Usar su escudo'
    },
    batman: {
        nombre: 'Batman',
        poder: 'volar'
    },
    spiderman: {
        nombre: 'Spiderman',
        poder: 'Telarania'
    },
}

//callback retorna
export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if(heroe){
        callback(null, heroe);
    } else {
        //un error
        callback(`no existe un héroe con el id ${id}`);
    }
}
