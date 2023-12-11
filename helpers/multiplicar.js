const fs = require('fs');
const colors = require('colors');

const crearTabla = async(base = 5, listar = false, hasta)=>{

    try {
    
        let salida = '';
        let imprime = '';
    
        for (let i = 1; i<=hasta; i++) {
            salida += (`${base} x ${i} = ${base*i}\n`);
            imprime +=(`${colors.red(base)} ${'x'.green} ${i} ${'='.green} ${base*i}\n`);
        }

        if(listar){
            console.log('====================='.green);
            console.log('  Tabla del: '.green, colors.blue(base));
            console.log('====================='.green);
            console.log(imprime);
        }
        
        //fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
        //    if (err) throw err;})
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }
        
    
}

module.exports = {
    crearTabla
}

    /*
const crearTabla = (base = 5)=>{

    console.log('=====================');
    console.log(`  Tabla del ${base} `);
    console.log('=====================');

    let salida = '';

    for (let i = 1; i<=10; i++) {
        salida += (`${base} x ${i} = ${base*i}\n`);
    }
    console.log(salida);
    
    //fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    //    if (err) throw err;})
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    
    console.log(`tabla-${base}.txt creado`);
}

module.exports = {
    crearTabla
} */