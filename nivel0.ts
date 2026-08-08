console.log("El laboratorio está en línea");
console.log("Criaturas activas:", 3);

let nombre: string = "Chispa"; // texto
let energia: number = 100; // número (enteros Y decimales, aquí no hay distinción)
let dormida: boolean = false; // verdadero o falso
console.log(nombre, energia, dormida?"dormida":"despierta");

//energia = "tengo sueño"; -> error de tipo, no se puede asignar un string a una variable de tipo number

let criatura: string = "Chispa";
let nivel: number = 5;
console.log(`${criatura} alcanzó el nivel ${nivel}`);



