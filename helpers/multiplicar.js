const fs=require('fs');
const color=require('colors');
const crearArchivo= async(base=5,listar=false, hasta=10)=>{
    try{
        let salida='';
        let consola ='';
       
        for(let i=1;i<=hasta;i++){
            salida+=(`${base} ${'x'} ${i} ${'='} ${base*i}\n`)
            consola+=(`${base} ${'x'.blue} ${i} ${'='.red} ${base*i}\n`);   
        }
        
        if(listar){
            console.log(color.green('================='));
            console.log(color.rainbow(`   Tabla del:`),base)
            console.log(color.green('================='));
            console.log(consola);
        }
        
        fs.writeFileSync('./salida/'+`tabla${base}.txt`,salida);

        return `tabla-${base}.txt`;
       
    }
    catch(err){
        throw err;
    }
};

module.exports={
    crearArchivo
    // crearArchivo: crearArchivo ( si se envia aalgo del msmo nombre, se puede omitir a donde apunta)
}