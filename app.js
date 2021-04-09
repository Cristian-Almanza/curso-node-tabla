console.clear();
const color=require('colors');
const { crearArchivo }=require('./helpers/multiplicar');
const {argv}=require('./config/yargs');


//console.log(argv);

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo=>{console.log(color.rainbow(nombreArchivo + ' Creada!!'))})
    .catch(err=>{console.log(err,'ERROR!')});


    //console.log('base:')
//const base=7;
//const [ , , arg3='base3']=process.argv;
//const [ , base=5]=arg3.split('=');

