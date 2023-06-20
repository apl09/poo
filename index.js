// Crea la clase Persona, con las propiedades nombre, edad y género, y el método obtDetalles(),
//  que muestre por pantalla las propiedades de la persona.

class Persona{

    constructor(nombre, edad, genero,) {
    
    this.nombre = nombre;
    
    this.edad = edad;
    
    this.genero = genero;    
    
    
    }
    
    obtDetalles() {
    
    console.log(`soy ${this.nombre} y tengo ${this.edad}, mi genero es ${this.genero}`);
    
    }
    
    }
    
    let Persona1= new Persona("Juan", "98"," noBinario");
    
    Persona1.obtDetalles();



// Crea la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el
//  método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {

    constructor (nombre, edad, genero, curso, grupo) {
    
    super(nombre, edad, genero)
    
    this.curso = curso;
    
    this.grupo = grupo;
    
       
    }
    registrar(){
        console.log(`Mi nombre es ${this.nombre} mi edad es ${this.edad}, mi ${this.genero}, voy al ${this.curso} y ${this.grupo}`);
    }
    
    };
    
    let miEstudiante = new Estudiante('Manolo', '26', 'genero fluido', 'curso de cullidor', 'grupo de coger naranjas');
    miEstudiante.registrar();











// Crea la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y 
// el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {

    constructor (nombre, edad, genero, asignatura, nivel) {
    
    super(nombre, edad, genero)
    
    this.asignatura = asignatura;
    
    this.nivel = nivel;
    
       
    }
    asignar(){
        console.log(`Mi nombre es ${this.nombre} mi edad es ${this.edad}, mi ${this.genero}, doy la asignatura de ${this.asignatura} y el nivel es ${this.nivel}`);
    }
    
    };
    
    let miProfesor = new Profesor('Evaristo', '87', 'Masculino', 'HTML', 'basico');
    miProfesor.asignar();

