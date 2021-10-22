class app {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (this.iniciada == false) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true) {  
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
}


App = new app ("16.000","5 estrellas", "90mb")

App.instalada();
App.desinstalar();
App.abrir();
App.cerrar();