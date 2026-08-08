class Mujer {
    private nombre : string = "laura";
    private edad : number = 30;
    private SabeLavarPlatos : boolean = false;
    private SabeCocinar : boolean = true;
    private Utilidad : number = this.SabeLavarPlatos?50:0 + (this.SabeCocinar?50:0);
    private Kilometraje : number = 0;
    private Valor : number = this.Utilidad - this.Kilometraje;

    Mujer(nombre: string, edad: number, SabeLavarPlatos: boolean, SabeCocinar: boolean, Kilometraje: number) {
        this.nombre = nombre;   
    }
}

class Criatura {
    nombre: string = "Sin nombre";
    tipo: string = "Desconocido";
    energia: number = 100;
    nivel: number = 1;
}

const Pitochu: Criatura = new Criatura();

console.log(Pitochu)

Pitochu.nombre = "Pitochu";
Pitochu.tipo = "Violador";
Pitochu.energia = 100;
Pitochu.nivel = 5;
console.log(Pitochu);

console.log(`Energía: ${Pitochu.energia} | Nivel: ${Pitochu.nivel}`);

const Mojonix: Criatura = new Criatura();

Mojonix.nombre = "Mojonix";
Mojonix.tipo = "Mierda";
Mojonix.energia = 0;
Mojonix.nivel = 1;
console.log(Mojonix);

console.log(`Energía: ${Mojonix.energia} | Nivel: ${Mojonix.nivel}`);

const STARBIENPINSHEPENDEJO: Criatura = new Criatura();

STARBIENPINSHEPENDEJO.nombre = "STARBIENPINSHEPENDEJO";
STARBIENPINSHEPENDEJO.tipo = "Estudiante de Ingeniería Industrial";
STARBIENPINSHEPENDEJO.energia = 100;
STARBIENPINSHEPENDEJO.nivel = 7;
console.log(STARBIENPINSHEPENDEJO);

console.log(`Energía: ${STARBIENPINSHEPENDEJO.energia} | Nivel: ${STARBIENPINSHEPENDEJO.nivel}`);


const otraMontañadeMierda: Criatura = Mojonix;

otraMontañadeMierda.nombre = "Otra Montaña de Mierda";

console.log(otraMontañadeMierda);
console.log(Mojonix); // Son la misma montaña de mierda, porque otraMontañadeMierda es una referencia a Mojonix

/*
¿Cuántos new necesitas para tener 5 criaturas de verdad? r// 5 new, porque cada new crea un objeto nuevo en memoria, y si quieres 5 criaturas distintas, necesitas 5 instancias nuevas de la clase Criatura.
*/

