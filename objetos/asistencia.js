class Asistwncia{
    fecha = "01/01/1999"
    asistencia = ""
    estudiante = new Persona()
    materia = new Materia()
    
    conductor(){
        this,fecha = "Ingrese la fecha"
        asistecia = "Ingrese la asistencia"
        estudiante = 1

}

    
    GetFecha() { return this.fechs }
    GetAsistencia() { return this.asistencia }
    GetEstudiante() { return this.estudiante }
    GetMateria() { return this.materia }
    
    SetFecha(valor) { return this.fechs }
    SetAsistencia(valor) { return this.asistencia }
    SetEstudiante(valor) { return this.estudiante }
    SetMateria(valor) { return this.materia }
    
    toString(){
        return this.GetNombre()
        + " "
        + this.GetAula()
        + " "
        + this.GetCapacidad()
    }
}