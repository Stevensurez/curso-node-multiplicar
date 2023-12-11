const {crearTabla } = require('./helpers/multiplicar');
const argv = require('./confug/yargs');
require('colors');

console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.b);
crearTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err=> console.log(err));


/*
const [ , , arg3]=process.argv;
const [, base = 1] = arg3.split('=');
//console.log(arg3);*/

//const base = 8;

/*
crearTabla(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err=> console.log(err));*/
// imprimir la tabla del 5 en consola


