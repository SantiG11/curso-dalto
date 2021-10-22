
const obtenerInformacion = (materia)=>{
    materias = {
        fisica:["Perez","pedro", "maria", "jose" ],
        programacion:["Gomez","pedro",  "jose", "cofla"],
        logica:["Hernandez","pedro", "maria", "jose", "cofla"],
        quimica:["Rodriguez", "maria", "jose", "cofla"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return false;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = obtenerInformacion(materia)[0][0];
    let alumnos = obtenerInformacion(materia)[0];
    alumnos.shift();
    document.write(`El profesor en <b> ${informacion[1]} es</b>: <b style="color:red">${profesor}</b><br>
       Los alumnos son: <b style="color:blue">${alumnos}</b><br><br> `);
}
}

const cantidadDeClases = (almuno)=>{
    let cantidadTotal = 0;
    for (info in informacion[2]) {
        if (informacion[2][info].includes(alumno)) {
            cantidadTotal++;
        }
    }
}


//mostrarInformacion("fisica");
//mostrarInformacion("quimica");
//mostrarInformacion("logica");
//mostrarInformacion("programacion");