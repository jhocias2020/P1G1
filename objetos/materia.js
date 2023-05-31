class Materia{
    nombre;
    aula = ""
    capacidad

    conductor(){
        this,nombre = "Ingrese el nombre de la materia"
        aula = "Ingrese el nombre del aula"
        capacidad = 1
    }

    GetNombre() { return this.nombre }
    GetAula(valor) { this.aula = valor }
    GetCapacidad(valor) { tpacidad = valor }

    SetNombre() { return this.nombre }
    SetAula(valor) { this.aula = valor }
    SetCapacidad(valor) { tpacidad = valor }


    toString(){
        return this.GetNombre()
        + " "
        + this.GetAula()
        + " "
        + this.GetCapacidad()
    }
}