/* Brenda Eich creador del Lenguaje de programcion JavaScript
*  nace en 1995, 1997 primera edicion 
*/

/* ISOMORFISMO
*  Es el unico lenguaje capaz de ejecutarse en las 3 capas de una aplicacion
*  1. Frontend (Javascript)
*  2. Backend (NodeJS)
*  3. Persistencia de datos (MongoDB, Couch DB, Firebase, etc).
*/

/* Puedes hacer:
*  Diseño y desarrollo web
*  Hacer videojuegos
*  Experiencias 3D, Realidad aumentada, realidad virtual
*  Controlar Hadware (Drones, robots, electrodomesticos)
*  Aplicaciones hibridas y moviles
*  Machine learning
 */

/* Lenguaje de alto nivel (no tenemos que preocuparnos por la memoria o recoleccion de basura)
*  Interpretado (No necesita una fase de compilacion para despues pasar a la ejecucion)
*  dinamico     (Se compila en tiempo de ejecucion)
*  debilmente tipado (la variable puede pasar de valor numero a cadena)
*  Multiparadigma (programacion estructurada, orientada a objetos)
*  Sensible a MAYUSCULA y minuscula
*  No necesitas los puntos y comas al final de cada linea

/* Escritura del codigo
 * Los identificadores deben de empezar con:
 * una letra o
 * un signo de dolar $ o 
 * un guion bajo _
 * nunca con numeros o caracteres especiales
 */

/**  Usa snake_case en: 
*  Archivos:
*  mi_archivo.js
*   
*  UPPER_CASE en:
*  Constantes:
*  const UNA_CONSTANTE = 'Soy una constante'
*
*  UpperCamelCase en:
*  Clases
*  class SerHumano { ...}
*
*  lowerCamelCase
*  Objetos
*  const unObjeto = {.. }
*
*  Primitivos
*  let unaCadena = 'Hola mundo'
*
*  Funciones
*  function holaMundo () {...}
*
*  Instancias
*  const ajax = new XMLHttpRequest() {...}
*/

/** Palabras reservadas
 *  abstract
 *  boolean, break, byte
 *  case, catch, char, class, const, continue
 *  debugger, default, delete, do, double
 *  else, enum, export, extends
 *  false, final, finally, float, for, function
 *  goto
 *  if, implements, import, in, instance, int, interface
 *  long
 *  native, new, null
 *  package, private, protected, public
 *  return
 *  short, static, super, switch, synchronized
 *  this, throw, throws, transient, true, try, typeof
 *  var, volatile, void
 *  while, with
 */

/** Ordenamiento de código
 *  importacion de modulos
 *  declaracion de variables
 *  declaracion de funciones
 *  ejecucion de código
 */

/** Tipos de datos
 *  Primitivos (se accede directamente al valor)
 *  string
 *  number
 *  boolean
 *  null
 *  undefined
 *  NaN
 * 
 *  Compuestos (Se accede a la referencia del valor)
 *  object = {}
 *  array = []
 *  function () {}
 *  Class {}
 */

/** Plugins en Visual studio code
 *  ESLint (para warnings)
 *  Live Server
 *  Prettier (Code formatter)
 */

/* Data Types:
undefined, null, boolean, string, symbol, number, object
*/

var myName = "Beau";

myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14;

//------------------------------------------------------

var c = "I am a";
c= c + "String";
//console.log(c);

//Declaracion

//sensibilidad de las variables : se diferencia entre mayusculas y minuculas
// stuD diferente STUD
//empezar por minuscula
var a;
a=10;

//suma

var suma = 10 + 10;
//console.log(suma);

//resta
var diferencia = 45 - 33;
//console.log(diferencia);

//producto
var producto = 8*8;
//console.log(producto);

//cociente
var quotient = 66 / 33;
//console.log(quotient);

//residuo

var residuo;
residuo = 11 % 3;
//console.log(residuo);

//incrementador

var p = 87;
p++;

p--;

// asignación compuesta con adición aumentada

a += p; // a = a + p ;
a -= p; // a = a - p ;
a *= p; // a = a * p ;
a /= p; // a = a / p ;

// declaracion variable string

var firstName = "Alan";
var lastName = "Turing";

// scaping para string

var myStr = "I am a \"double quote\" end ";
//console.log(myStr);

// ESCAPE SEQUENCES IN STRINGS
/* 
 \'     single quote
 \"     double quote
 \\     backslash
 \n     newline
 \r     carriage return
 \t     tab
 \b     backspace
 \f     form feed
*/

//Concatenar String

var ourStr = "Hi" + " Babe";
var ourStr1 = " how are you"
var ourStr2 = ourStr + ourStr1; // ourStr += ourStr1

//console.log(ourStr += ourStr1);

//tamaño de un string y encontrar caracter

var t1 = "Tatiana";
//console.log(t1.length);

//console.log(t1[5]);

//inmutabilidad string ... puedo acceder al caracter pero NO SE PUEDE modificar la cadena

str='INMUTABLE';
 
//console.log(str[2]); /*Aparece la letra M que es la letra asociada a esta posición o índice*/
 
str[2]= 'p'; //no se le puede asignar
 
//console.log(str[2]); /*Aparece la letra M otra vez*/

str = '123456789';
//console.log(str); //se puede modificar la cadena si se tiene la misma cantidad de caracteres


//encontrar el ultimo caracter de una cadena

var nombre = "Mercedes";
var ultimaLetraNombre = nombre[nombre.length-1];
//console.log(ultimaLetraNombre);

 //Funciones

 function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
     var result = myNoun + myAdjective + myVerb + myAdverb;
     return result;
 }
 //console.log(wordBlanks("dog","big","ran","quickly"));


 //Arrays

 var ourAarray = [1, 23];
 ourAarray[0] = 2;
 //console.log(ourAarray);


 //Matriz

var ourMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
var myData = ourMatriz[2][1];
//console.log(myData);


//Matriz Push agrega un elemento
var ourArray = [1, 56, 23];
ourArray.push(["happy", "joy"]);  
//console.log(ourArray);

var ourMatriz1 = [["the universe", "sol"], ["everything", "luna"]];
ourMatriz1.push(["happy", "joy"]);
//console.log(ourMatriz1);



//Matriz Pop elimina el ultimo elemento del array
var ourArray1 = [1, 56, 23];
ourArray1.pop();  
//console.log(ourArray1);

var ourMatriz11 = [["the universe", "sol"], ["everything", "luna"]];
ourMatriz11.pop();
//console.log(ourMatriz11);



//Array shift  elimina el primer elemento del array
var ourArray2 = [1, 56, 23];
ourArray2.shift(); 
//console.log(ourArray2);

var ourMatriz2 = [["the universe", "sol"], ["everything", "luna"]];
ourMatriz2.shift();
//console.log(ourMatriz2.toString());


//Array ushift  agrega en la primera posicion del array
var ourArray3 = [1, 56, 23];
ourArray3.shift(); 
ourArray3.unshift(26);
//console.log(ourArray3);

var ourMatriz3 = [["the universe", "sol"], ["everything", "luna"]];
ourMatriz3.shift();
ourMatriz3.unshift(["marte", "jupiter"]);
//console.log(ourMatriz3);


//Listas
var myList = [["banana", 3],["milk", 2],["cereal", 3],["juice", 2]];


//funciones
function ourReusableFunction(a, b) {
    console.log(a - b);
}
//ourReusableFunction(10, 5);

// alcance global y funciones
//

var myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
}

function fun2 (){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
///fun1();
//fun2();

function nextInLine (arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

//console.log("Before: " + JSON.stringify(testArr));
//console.log(nextInLine(testArr, 6));
//console.log("After: " + JSON.stringify(testArr));

// Operadores logicos - Relacionales

/*
|| OR cuando tengo dos o mas condiciones, con que una se cumpla, validará
&& AND
! NOT
> mayor
< menor
>= mayor igual
<= menor igual
== igual igual ... comparacion de valores
=== 3 iguales es comparacion de tipo de dato y de valor
!= diferente
 */

/** Operador unario
 *  i++
 *  i--
 *  ++i
 *  --i
 */

var Animal = 'Jirafa';
switch (Animal) {
  case 'Vaca':
  case 'Jirafa':
  case 'Perro':
  case 'Cerdo':
    //console.log('Este animal subirá al Arca de Noé.');
    break;
  case 'Dinosaurio':
  default:
    //console.log('Este animal no lo hará.');
}

//Object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper"; //para cambiar el valor 
ourDog.bark = "bow-bow"; //agregar una nueva propiedad
ourDog['barky'] = "woof"; //agregar una nueva propiedad
//console.log(ourDog);
delete ourDog.tails;  //elimar una propiedad 
//console.log(ourDog);

function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "adams",
        "bravo": "boston",
        "charlie": "chicago"
    };
    result = lookup[val];
    return result;
 }
 //console.log(phoneticLookup('bravo'));

 //El método  hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.

 var myObj = {
     gift: "pony",
     pet: "kitten",
     bed: "sleigh"
 };

 function checkObj (checkProp){
    
    if (myObj.hasOwnProperty(checkProp)) {  // hasOwnProperty() devuelve un booleano
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
 }
//console.log(checkObj('pet'));

// Cadenas
// toUpperCase mayusculas
// toLowerCase minusculas
// includes    incluye
// trim        quitar espacios al inicio y al final de una cadena
// split       realiza un arreglo con el separador que se le asgine
let nombre23 = "Jon";
let apellido23 = "MirChan";

//console.log(nombre23.toUpperCase(),apellido23.toLowerCase(),apellido23.includes("Chan"));

let cadena = "      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.  ";

//console.log(cadena.trim());
//console.log(cadena.split("."));

// concatenar concatenacion cadena

let f = "Tatiana";
let saludo = "Hola mi nombre es " + f;
//console.log(saludo);

let saludo2 = `Hola mi nombre es ${f} ${nombre23}` 
//console.log(saludo2);


// Number toFixed redondea el valor de un numero
// parseInt
// parseFloat
// typeof para saber que tipo de dato es la variable
let b = new Number(1);
let ce = 7.19;
let de = "5.6";
//console.log(ce.toFixed(1)); //7.2
//console.log(parseInt(ce));
//console.log(parseFloat(ce));
//console.log(typeof ce, typeof f);
//console.log( ce + parseFloat(de));


/** Valores verdaderos
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
*
*Valores falsos
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
 */

// valor undefined .. es una variable que no ha sido inicializada o no tiene valor
// valor null .. significa que la variable esta vacia, y se lo puede asignar el programador
// NaN - Not a Number .. es cuando en una operacion aritmetica la variable no es un numero


// Funcion declarada

function estoEsFuncion() {
    console.log("Es una funcion");
}
 // toca inicializar las variables que le estoy enviando por parametros
 function saludar (nombre = "desconocido", edad = o){
     console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`);
 }
 //saludar("Faber", 78);

 // funcion expresada

 const funcionExpresada = function (){
     console.log("Esto es una funcion expresada, es decir, una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dirá..");
 }

 let a1 = new String("Hola");
 //console.log(a1);

 //ciclos

 let numeros = [10,20,30,40,50,60,70,80,90,100];
 
//  for (let i = 0; i < numeros.length; i++) {
//      console.log(numeros[i]);
//  }

 const jon = {
     nombre: "Jon",
     apellido: "Mircha",
     edad: 35
 }

//  for (const propiedad in jon) {
//      console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`);
//  }


//Manejo de errores

// try {
//     console.log("En el try se agrega el codigo a evaluar");
// }catch (error){
//     console.log("Catch, captura cualquier error surgido o lanzado en el try");
// } finally {
//     console.log("Finally, se ejecutará siempre al final de un bloque");
// }

// Deconstruccion

//Sin destructuracion
const numeros1 = [1,2,3];

let uno = numeros1[0],
    dos = numeros1[1],
    tres = numeros1[2];

//console.log(uno, dos, tres);

//Con destructuracion
const[one, two, three] = numeros1;
//console.log(one, two, three);

const persona12 = {
    nombre5: "Jon",
    apellido5: "MirCha",
    edad5: 35
};

let {nombre5, apellido5, edad5} = persona12;
//console.log(nombre5, apellido5, edad5);

// Objetos

let nombre9 = "hOla",
edad9 = 7;

const perro = {
    nombre: nombre9,
    edad: edad9,
    ladrar: function () {
        console.log("guauu guauu!!");
    }
}

//console.log(perro);
//perro.ladrar()

const dog = {
    nombre9,
    edad9,
    raza: "Callejero",
    ladrar(){          //nueva forma de declarar una funcion
        console.log("guaau guauu!!");
    }
}
//console.log(dog);
//dog.ladrar();

// Parametros REST (tres puntos suspensivos) y Operador Spread

function sumar(a,b, ...c) {
    let resultado = a + b;
    c.forEach(function (n) {
        resultado += n
    });
    return resultado;
}
// console.log(sumar(1,2));
// console.log(sumar(1,2,3));
// console.log(sumar(1,2,3,4));
// console.log(sumar(1,2,3,4,5));
// console.log(sumar(1,2,3,4,5,6));
// console.log(sumar(1,2,3,4,5,6,7));

const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0];

// console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];  //imprime dos arreglos
//console.log(arr3);


// Funciones de flecha arrow functions

// const saludar = nombre => console.log(`Hola ${nombre}`);
// saludar("Irma");

const sumar20 = (a, b) => a + b; 

//console.log(sumar20(9,9));

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Uno");
    console.log("Uno");
}
//funcionDeVariasLineas();

//Prototipos
// Paradigma orientado a objetos POO
/* Clases - Modelo a seguir
 * Objetos - Es una instancia de una clase
 * Atributos - es una caracteristica o propiedad del objeto (variables  dentro de un objeto)
 * Metodos - son las acciones que un objeto puede realizar (funciones dentro de un objeto)
 */

//Funcion constructora

function Animal1(nombre5, genero5) {

    //atributos
    this.nombre5 = nombre5;
    this.genero5 = genero5;
}
 //metodos prototipo
 Animal1.prototype.sonar = function () {
    console.log("Hago sonidos porque estoy vivo ");
}

const snoopy = new Animal1("Snoopy", "Macho"), 
      lolaBunny = new Animal1("Lola Bunny", "Hembra");

//console.log(snoopy);
//console.log(lolaBunny);

//Herencia Prototipica

function Perro(nombre2, genero2, tamanio){
this.super = Animal1;
this.super(nombre2,genero2);
this.tamanio = tamanio;
}
//Perro está heredando de Animal
//Perro.prototype = new Animal1();
//Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del Prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Soy un perro");
}
const snoppy1 = new Perro("Snoppy 1", "Macho", "Mediano");
//console.log(snoppy1);

// Clases y herencia

class Gato extends Animal1 {
    constructor(nombre0, genero0, tamanio0){
        //con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre0, genero0);
        this.tamanio0 = tamanio0;
        this.raza = null;
    }
 //los setter y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
};
const negrito = new Gato ("El negrito", "Macho", "mediano");
//console.log(negrito);
negrito.setRaza="Criollo";
//console.log(negrito.getRaza);



class Humano {

    constructor(name1, genero1){
        this.name1 = name1;
        this.genero1 = genero1;
    }

    hablar(){
        console.log("ESTOY HABLAND0");
    }

};

const isabel = new Humano ("Isabel", "Femenino");
//console.log(isabel);
//isabel.hablar();


// console error warning

let nombre123 = "Tatiana Chan";
let juego = "Pubg mobile";
// console.log(console);
// console.error("esto es un error");
// console.warn("Esto es un aviso");
// console.info("Esto es un mensaje informativo");
//console.clear();
// console.log(`Un registro de lo que ha pasado en nuestra aplicacion`, nombre123, juego);
//console.log(window);
//console.log(document);
//console.dir(document); //despliega una lista interactiva de las propiedades del objeto JavaScript especificado. 
//console.dir(window);
//console.clear();

// console.group("Cursos de Youtube"); 
// console.log("Curso JS");
// console.log("Curso NodeJS");
// console.log("Curso de PWA");
// console.groupEnd();
// console.groupCollapsed("Cursos de Youtube"); 
// console.log("Curso JS");
// console.log("Curso NodeJS");
// console.log("Curso de PWA");
// console.groupEnd();
// console.clear();

// console.log(console);
// console.table(Object.entries(console).sort());

// const arreglo1 = [1,2,3,4,5],
//       vocales = ["a", "e", "i", "o", "u"];

// console.table(arreglo1);
// console.table(vocales);

//console.time("Cuanto tiempo tarda mi codigo");
const arreglo2 = Array(10);

for (let index = 0; index < arreglo2.length; index++) {
    //console.count("Codigo for");
    arreglo2[index] = index;
}
//console.timeEnd("Cuanto tiempo tarda mi codigo");

let x1=3,
y=2,
pruebaxy="x menor que y";
//console.assert(x1<y, {x1,y,pruebaxy});

// console.log(Date());
let fecha = new Date();
//console.log(fecha);
//console.log(fecha.getDate());
//console.log(fecha.getDay());
// console.log(fecha.getMonth());
// console.log(fecha.getFullYear());
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
// console.log(fecha.getMilliseconds());
// console.log(fecha.toDateString());
// console.log(fecha.toLocaleDateString());
// console.log(fecha.toLocaleTimeString());
// console.log(fecha.getTimezoneOffset());
// console.log(fecha.getUTCDate());
// console.log(fecha.getUTCHours());
// console.log(Date.now());



//Objeto Math

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-7.9));
// console.log(Math.ceil(7.2)) //num entero mayor
// console.log(Math.floor(7.8)); //numero entero menor
// console.log(Math.round(7.49));
// console.log(Math.sqrt(81));
// console.log(Math.pow(2,5));
// console.log(Math.sign(-0.3));
// console.log(Math.random());
// console.log(Math.random*1000);


/** Operador de cortocircuito
 * Cortocircuito OR: Cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se encargará por defecto
 * 
 * Cortocircuito AND: Cuando el valor de la izquierda en la expresion siempre pueda validar a false, es e valor que se encargará por defecto
 * 
 */

function saludo1(nombre){
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
// saludo1("Jon");
// console.log("cadena" || "derecha"); //el de la izquierda es true
// console.log(false || "derecha");    //como el de la izquierda es falso, entonces retorna el de la derecha
// console.log(false && "derecha");    //entonces es false


//alert confirm prompt

 // window.alert("Hola Alerta");
 // window.confirm("Hola Confirmacion");
 // window.prompt("Hola prompt");

//  let alerta = alert("Hola alerta"),
//     confirmacion = confirm("Hola confirmacion"),
//     aviso = prompt("Hola prompt");
//     console.log(alerta);
//     console.log(confirmacion);
//     console.log(aviso);


/* Expresiones Regulares
   Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la busqueda de patrones de cadenas de caracteres
*/

let cadena2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "

let expReg = new RegExp("lorem","ig"); //i ignora mayuscuylas y minusculas y g que busque todas las coincidencias
let expReg2 = /lorem/ig;

//console.log(expReg2.test(cadena2));
//console.log(expReg2.exec(cadena2));


//Formas de escribir las funciones Anonimas Autoejecutables

//clasica
// (function(){
//     console.log("version clasica")
// })();

// //La Crockford (JavaScript The God Parts)
// ((function(){
//     console.log("version crockford")
// })());

// //Unaria
// +function(){
//     console.log("Version unaria")
// }();

// //Facebook
// !function(){
//     console.log("version facebook")
// }();

//modulos import / export 
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// function contarCaracteres(texto1=""){
//     if(!texto1){
//        console.warn("No ingresaste el texto");
//     } else{
//         console.log(texto1.length);
//     }
// }
// contarCaracteres("Hola");

const contarCadena = ( cadena = "" ) => 
(!cadena) 
? console.warn("No ingresaste ninguna cadena") 
: console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`); 
//contarCadena("Hola Bebe");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function recortarTexto(texto2="", i=0){
//     let recortado = texto2.slice(0,i);
//     console.log(recortado);
// }
// recortarTexto("Hola Mundo",4);

const recortarTexto = (cadena = "", i=undefined) =>
(!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    : (i === undefined)
        ? console.warn("No ingresaste ninguna longitud")
        : console.info(cadena.slice(0,i));
//recortarTexto("Hola Mundo",4);



// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// function separarTexto(texto2="", caracter=""){
//     let separar = texto2.split(caracter);
//     console.log(separar);
// }
// separarTexto("hola que tal", " ");

const separadorTexto = (cadena = "" , caracter = undefined) =>
    (!cadena)
        ? console.warn("No ingresaste la cadena")
        : (caracter === undefined)
            ? console.warn("No ingresaste el separador")
            : console.info(cadena.split(caracter));
//separadorTexto("hola, qu e tal", ", ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// function repetir(texto3="", veces =0){
//     let repetir1= texto3.repeat(veces)
//     console.log(repetir1);
// }
// repetir("Stewie ", 5);

const repetirTexto = ( cadena = "", veces = undefined) =>
    (!cadena)
        ? console.warn("Ingrese la cadena")
        : (veces === undefined)
            ? console.warn("Ingrese el iterador")
            : ( Math.sign(veces) === -1 || veces ===0)
                ? console.warn("Iterador no aceptado")
                : console.log(cadena.repeat(veces))
//repetirTexto("Stewie ", 5);

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const reves = ( cadena9 = "") => 
(!cadena)
? console.warn("Ingrese la cadena")
: console.info(cadena9.split("").reverse().join(""));

//reves("tatiana salazar parra"); 

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textoEnCadena = (cadena = "", palabra = "") => {
    if (!cadena) 
        return console.warn("No ingresaste el texto");
    if (!palabra)
        return console.warn("No ingresaste la palabra");
    let i = 0,
        contador = 0;
    while (i !== -1){
        i = cadena.indexOf(palabra, i); 
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`la palabra ${palabra} se repite ${contador}`);
    }
//textoEnCadena("k hi hi vai hi", "hi");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindroma = (cadena = "") =>{
    if(!cadena) return console.warn("Ingresa la palabra");
    
    cadena = cadena.toLowerCase();
    let reves = cadena.split("").reverse().join("");

    return (cadena === reves)
    ? console.info(`si es palindromo`)
    : console.info(`No es`);
}
//palindroma("hola");
//palindroma("salas");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto)
        ? console.warn("No ingresaste un texto")
        : (!patron)
            ? console.warn("No ingresaste un patron de caracteres")
            : console.info(texto.replace(new RegExp(patron,"ig"),"")); 
            //i ignorar mayúsculas y minúsculas .. g Encuentra todas las coincidencias en lugar de detenerse después de la primera.
            //RegExp crea un objeto de expresión regular para hacer coincidir el texto con un patrón.

//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () =>
        console.info(Math.floor(Math.random() * (600 - 501 + 1)) + 501);

//aleatorio();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numCapicua = (num = 0) => {
    if(!num)
        return console.warn("No ingresaste tu numero");
    if(typeof num !== "number")
        return console.error("el valor ingresado no es un numero");
    num = num.toString(); 
    let nume = num.split("").reverse("").join("");
    return (nume === num)
        ? console.log(true)
        : console.log(false);
}
 //numCapicua(2000);
    

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num = undefined) => {
    let factorial = 1;
    if (num === undefined)
        return console.warn("Ingrese un numero");
    if (typeof numero !== "number")
        return console.error("No ingreso un numero");
    if (num === 0)
        return console.error("el numero no puede ser 0");
    if (Math.sign(num) === -1)
        return console.error("El numero no puede ser negativo");
    else 
        for (let index = 1; index <= num; index++) {
            factorial = factorial * index;
        }
    return console.info(factorial);
}
//factorial(5);

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primo = (num=undefined) => {
    if (num === undefined)
        return console.warn("Ingrese un numero");
    if (typeof num !== "number")
        return console.error("No ingreso un numero");
    if (num === 0)
        return console.error("el numero no puede ser 0");
    if (Math.sign(num) === -1)
        return console.error("El numero no puede ser negativo");
    
    let divisible =false;
    
    for (let i = 2; i < num; i++){

       if((num%i)===0){
           divisible = true;
           break;
       }
    }
    return (divisible)
        ? console.log("no es primo")
        : console.log("es primo")
    }
//primo(13);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroParImpar = (num = undefined) => {
    if (num === undefined)
        return console.warn("Ingrese un numero");
    if (typeof num !== "number")
        return console.error("No ingreso un numero");
    
    return ((num%2)===0)
    ? console.info("Es par")
    : console.info("Es impar")
}
//numeroParImpar(3);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const celsiusFahrenheit = (unidad = undefined, grados=undefined) =>{
    if (grados === undefined)
        return console.warn("No ingresaste los grados a convertir");
    if (typeof grados !== "number")
        return console.error("El valor ingresado no es un numero");
    if (unidad === undefined)
        return console.warn("No ingresaste la unidad a convertir");
    if (typeof unidad !== "string")
        return console.error("El valor ingresado no es C o F");
    if(unidad.length !== 1 || !/(C|F)/.test(unidad))
        return console.warn("Valor de unidad no reconocido");
    if(unidad === "C"){
        return console.info( `${grados}°C = ${Math.round((grados*(9/5))+32)}°F`);
    } else if(unidad === "F"){
        return console.info( `${grados}°F = ${Math.round(((grados-32)*(5/9)))}°C`);
    } else {
        return console.error("El tipo de grados a convertir NO es valido");
    }
}
//celsiusFahrenheit("C",100);

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined , base = undefined) => {
    if (numero === undefined)
        return console.warn("No ingresaste el numero a convertir");
    if (typeof numero !== "number")
        return console.error("El valor ingresado no es un numero");
    if (base === undefined)
        return console.warn("No ingresaste la base convertir");
    if (typeof base !== "number")
        return console.error("El valor ingresado no es un numero");
    
    if(base === 2){
        return console.info(`${numero} base ${base} =  ${parseInt(numero,2)} base 10`);
    } else if (base === 10){
        return console.info(`${numero} base ${base} =  ${(numero.toString(2))} base 2`);
    } else {
        return console.error("El tipo de base a convertir no es valido");
    }
}

//convertirBinarioDecimal(114,10);
//convertirBinarioDecimal(1000,2);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined)
        return console.warn("No ingresaste el monto");
    if (typeof monto !== "number")
        return console.error("El valor ingresado no es un numero");
    if (monto === 0)
        return console.warn("El monto no puede ser cero");
    if (Math.sign(monto)===-1)
        return console.warn("El monto no puede ser negativo");
    if (typeof descuento !== "number")
        return console.error("El valor ingresado no es un numero");
    if (Math.sign(descuento)===-1)
        return console.warn("El descuento no puede ser negativo");

    return console.info(`${monto} - ${descuento}% = ${monto - ((monto*descuento)/100)}`);
}

//aplicarDescuento(1000,25);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha=undefined) => {
    if (fecha === undefined)
        return console.warn("No ingresaste la fecha");
    if (!fecha instanceof Date)
        return console.error("El valor ingresado no es string");
    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMS = 1000 * 60  * 60 * 24 * 365;
    let aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS); //aqui se saca el año a partir de los milisegundos 

    console.log("hoyMenosFecha", hoyMenosFecha);
    console.log("aniosEnMS",aniosEnMS);
    console.log("anioshumanos", aniosHumanos);
    console.log("Math.sign(aniosHumanos)",Math.sign(aniosHumanos));
    return (Math.sign(aniosHumanos) === -1)
        ? console.warn(`Falta ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}
//calcularAnios(new Date (2022,4,23));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

    const contarVocalesConsonantes = (cadena = "") => {
        if (!cadena)
            return console.warn("No ingresaste el texto");
        if (typeof cadena !== "string")
            return console.error("El valor ingresado no es cadena");

            let vocales = 0;
            let consonantes = 0;
            cadena = cadena.toLocaleLowerCase();
            for(let letra of cadena){
                if(/[AEIOUaeiou]/.test(letra)){
                    vocales++;                
                }
                if(/[BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz]/.test(letra)){
                    consonantes++;
                }
            }
            
        return console.info(`la cadena ${cadena} la cantidad de vocales ${vocales} y cantidad de consonantes ${consonantes}`);
    }
  //contarVocalesConsonantes("Hola como estas")


// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
//   /^[A-Z]{1}[a-z]*\s[A-Z]{1}[a-z]*$/

const esNombre = (cadena = "") => {
    if (!cadena)
        return console.warn("No ingresaste el texto");
    if (typeof cadena !== "string")
        return console.error("El valor ingresado no es cadena");
    let expReg = /^[a-záéíóúñ]+([ ]?[a-z])+$/gi.test(cadena);

    return (expReg)
        ? console.info(`"${cadena}", es un nombre valido`)
        : console.warn(`"${cadena}", No es un nombre valido`)
}
//esNombre("FábinhoZ´´ZS´S");


// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const esCorreo = (email = "") => {
    if (!email)
        return console.warn("No ingresaste el correo");
    if (typeof email !== "string")
        return console.error("El valor ingresado no es cadena de texto");
    let expRe = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expRe)
    ? console.info(`"${email}", es un email valido`)
    : console.warn(`"${email}", NO es un email valido`);
}

//esCorreo("ta,ti@gmailcom");

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const alCuadrado = ( arreglo = undefined) => {

    if (arreglo === undefined) 
        return console.warn("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
        return console.error("El valor que ingresaste no es un arreglo");
    if (arreglo.length === 0) 
        return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
        if(typeof num !== "number")
            return console.error("El valor ingresado NO es un numero");
    }
    const newArr = arreglo.map(el => el*el);

    return console.info(`Arreglo original ${arreglo} Arreglo elevado al cuadrado ${newArr}`);

    /*
    let a = new Array(arreglo.length);
    for (let i = 0; i < arreglo.length; i++) {
        a[i] = (Math.pow(arreglo[i],2));
    }
    return console.log(a.toString());
    */
}
//alCuadrado([1,4,8])


// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const menorMayor = ( arreglo = undefined) => {

    if (arreglo === undefined) 
        return console.warn("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
        return console.error("El valor que ingresaste no es un arreglo");
    if (arreglo.length === 0) 
        return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
        if(typeof num !== "number")
            return console.error("El valor ingresado NO es un numero");
    }
    return console.info(`Arreglo original ${arreglo} valor mayor ${Math.max(...arreglo)}, valor menor ${Math.min(...arreglo)}`);
/*
    let mayor = arreglo[0];
    let menor = arreglo[0];

    for (let i = 0; i < arreglo.length; i++) {
    if(menor > arreglo[i]){
        menor = arreglo[i]
    }    
    if (mayor < arreglo[i]){
        mayor = arreglo[i]
    }
    }
    return console.log(`el numero menor es ${menor} y el mayor es ${mayor}`);
*/
}
//menorMayor([6,3,9]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresImpares = (arreglo = undefined) => {

    if (arreglo === undefined) 
        return console.warn("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
        return console.error("El valor que ingresaste no es un arreglo");
    if (arreglo.length === 0) 
        return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
    if(typeof num !== "number")
        return console.error("El valor ingresado NO es un numero");
}
    return console.info({
        pares: arreglo.filter(num => num%2 === 0),
        impares: arreglo.filter(num => num%2===1)});

    // let pares = new Array();
    // let impares = new Array();
    // let j = 0;
    // let k = 0;
    // for (let i = 0; i < arreglo.length; i++) {
    //     if ((arreglo[i]%2) ===0 ){
    //         pares[j] = arreglo[i];
    //         j++;
    //     } else {
    //         impares[k] = arreglo[i];
    //         k++;
    //     }
    // }
    // return console.log(pares, impares);
}
//paresImpares([1,2,3,4,5,6,7,8,9,0]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenar = (arreglo = undefined ) => {

    if (arreglo === undefined) 
        return console.warn("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
        return console.error("El valor que ingresaste no es un arreglo");
    if (arreglo.length === 0) 
        return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
        if(typeof num !== "number")
        return console.error("El valor ingresado NO es un numero");
}
    return console.info({
        arreglo,
        asc : arreglo.map(el => el).sort(),
        desc : arreglo.map( el => el ).sort().reverse()
    });
}
//ordenar([4,7,5,9]);

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (arreglo=undefined) => {

    if (arreglo === undefined) 
        return console.warn("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
        return console.error("El valor que ingresaste no es un arreglo");
    if (arreglo.length === 0) 
        return console.error("El arreglo esta vacio");
    if (arreglo.length ===1) 
        return console.error("El arreglo debe tener al menos 2 elementos");
        //filter genera otro arreglo
    /*return console.info({
        original: arreglo,
        sinDuplicado: arreglo.filter((value,index,self) => self.indexOf(value) === index)
    });*/
    return console.info({
        original: arreglo,
        sinDuplicados: [...new Set(arreglo)] //Set no permite datos repetidos y le agrego los 3 punticos ... para que sepa que es el arreglo
    });
}

//eliminarDuplicados(["x", 10, "x", 2,"10",10,true,true]);


// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedioArreglo = (arreglo = undefined) =>{

    if (arreglo === undefined) 
        return console.warn("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
        return console.error("El valor que ingresaste no es un arreglo");
    if (arreglo.length === 0) 
        return console.error("El arreglo esta vacio");
    for (let num of arreglo){
        if(typeof num !== "number")
        return console.warn("el arreglo no es de numeros");
    }
    /*
    let suma=0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    console.log(suma)
    return console.log(suma/arreglo.length);
    */
   return console.info(
       arreglo.reduce((total,num,index,arreglo) =>{
       total+=num;
       if(index == arreglo.length-1){
           return `El promedio del arreglo es ${total/arreglo.length}`;
       }else{
           return total;
       }

   }));
}
//promedioArreglo([9,8,7,6,5,4,3,2,1,0]);

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.



// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

// En el video 43 te daré mi solución, antes de verlo trata de resolver los ejercicios, y comparte tus resultados en alguna plataforma como GitHub o CodePen y comparte el enlace de tus soluciones en los comentarios de este video. 

class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
    }
    validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`)

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud)
        return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`);

        return true;

    }
    validarNumero(propiedad, valor){
        if(!valor)
        return console.error(`${propiedad} "${valor}" el valor ingresado no es un numero`);
        return true;
    }

    validarIMDB(id){
        if(this.validarCadena("IMDB id", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`);
            }
        }   
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo)){
            this.validarLongitudCadena("Titulo",titulo,100);
        }
    }
    validarDirector(director){
        if(this.validarCadena("Director",director))
            this.validarLongitudCadena("Director",director,50);
    }
    validarEstreno(estreno){
        if(this.validarNumero("Año de Estreno",estreno))
           if(!(/^([0-9]){4}$/.test(estreno)))
           return console.error(`Año de Estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`); 
    }
}
const peli = new Pelicula({
    id: "tt1234567",
    titulo: "1111",
    director: "Director de la peli",
    estreno: 2020
});
console.log(peli);