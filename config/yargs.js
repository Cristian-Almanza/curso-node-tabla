const { describe, option } = require('yargs');

const argv=require('yargs')
                .option('b',{
                    alias:'base',
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar',
                    type:'number'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    describe: 'Muestra la tabla en consola',
                    default:false
                })
                .option('h',{
                    alias:'hasta',
                    describe:'Limite donde llegara la multiplicacion',
                    type:'number',
                    default: 10
                })
                .check((argv,options)=>{
                    if(isNaN(argv.h)){
                        throw 'El limite debe ser un numero'
                    }
                    return true;
                })
                .check((argv, options)=>{
                    if (isNaN(argv.b)){
                        throw 'La base debe ser un numero';
                    }
                    return true;// si no hay error, retorna true
                })
                .argv;

module.exports={argv};