let num = -8;

if(num > 0){
    console.log(`El numero introducido es positivo ${num}`);
}else if(num < 0){
    console.log(`El numero introducido es negativo ${num}`);
}else{
    console.log("El numero es cero");
};


console.log("ejercicio 2 numero par o impar");

num = 8;
if(num % 2 === 0){
    console.log(`El numero introducido es par`);
}else{
    console.log("El numero introducido es impar");
};

console.log("Ejercicio 4 Sumar numeros del 1 al 100");

let suma = 0;
for(let i = 1; i <= 100; i++){
    suma += i;
};
console.log(suma);

console.log("Ejercicio 5 Validar contraseña");
let pass = "Holamundo2"

if(pass.length >= 8){
    console.log("Contraseña correcta");
}else{
    console.log("Contraseña incorrecta");
};
if(pass.match(/\d/)){
    console.log("La contraseña tiene al menos un numero");
}else{
    console.log("La contraseña tiene que incluir un numero");
};
