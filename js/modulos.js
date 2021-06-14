import saludar ,{ Saludar, PI, usuario} from "./constantes.js"
import { aritmetica} from "./aritmetica.js"

console.log("ARCHIVOS MODULOS.JS");
console.log(PI, usuario);
console.log(aritmetica.sumar(3,4));
saludar();
let saludo = new Saludar();
saludo;