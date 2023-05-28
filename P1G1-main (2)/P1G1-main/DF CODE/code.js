// Variables globales

var A = 0
var operacion;

// Funciones

function factorialN() {
    var N = prompt("Ingrese un valor:", 3);
    var i = 1;
    var resp = 1;

    if (N >= 0) {
        if (N == 0) {
            alert("El factorial de " + N + " es " + resp + ".");
        } else {
            while (i <= N) {
                resp *= i;
                i += 1;
            }
            alert("El factorial de " + N + " es " + resp + ".");
        }
    } else {
        alert("No existe el factorial de un negativo.");
    }
}

function mayorAyB() {
    var A = prompt("Ingrese A", 10);
    A = parseInt(A);
    var B = prompt("Ingrese B", 7);
    B = parseInt(B);

    if (A == B) {
        alert("Los dos son iguales.");
    } else {
        if (A > B) {
            alert("El mayor es A: " + A);
        } else {
            alert("El mayor es B: " + B);
        }
    }
}

function menorAyB() {
    var A = prompt("Ingrese A", 10);
    A = parseInt(A);
    var B = prompt("Ingrese B", 7);
    B = parseInt(B);

    if (A == B) {
        alert("Los dos son iguales.");
    } else {
        if (A > B) {
            alert("El menor es B: " + B);
        } else {
            alert("El menor es A: " + A);
        }
    }
}

function obtenerDiv() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 7));
    var resultado = ~~(A / B);

    alert(resultado);
}

function obtenerMod() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 7));
    var resultado = A % B;

    alert(resultado);
}

function digitosN() {
    var N = parseInt(prompt("Ingresar N", 3));
    var resp = N;
    var cantidad = 1;

    if (N == 0) {
        cantidad = 1;
        alert(cantidad + " dígitos");
    } else {
        while (N != 0) {
            N = parseInt(N / 10);
            cantidad += 1;
        }
        alert(cantidad + " dígitos");
    }
}

function retornarDigitosN() {
    var N = parseInt(prompt("Ingresar N", 3));
    var dig = 0;

    if (N == 0) {
        dig = N;
        alert(dig);
    } else {
        while (N != 0) {
            dig = N % 10;
            alert(dig);
            N = parseInt(N / 10);
        }
    }
}

function mostrarTres() {
    var N = parseInt(prompt("Ingresar N", 3));
    var dig = 0;

    while (N != 0) {
        dig = N % 10;
        if (dig == 3) {
            alert("Existe el número 3");
            break
        }
        N = parseInt(N / 10);
    }
}

function areaPerimetroTrapecio() {
    var h = parseInt(prompt("Ingrese h:", 10));
    var b = parseInt(prompt("Ingrese b:", 5));
    var B = parseInt(prompt("Ingrese B:", 15));
    var a = parseInt(prompt("Ingrese a:", 10));
    var c = parseInt(prompt("Ingrese c:", 7));

    var Area = 0, Perimetro = 0;

    Area = ((b + B) / 2) * h;
    Perimetro = a + b + B + c;

    alert("El área es: " + Area);
    alert("El perímetro es: " + Perimetro);
}

function NParOImpar() {
    /* If normal

    var N = parseInt(prompt("Ingrese N:", 115));

    if ((N % 2) == 0) {
        alert(N + " es par.");
    } else {
        alert(N + " es impar.");
    }

    */
   
    // If abreviado

    var N = parseInt(prompt("Ingrese N:", 115));
    (N % 2) == 0 ? 10 : 1;
}

function ifNormal() {
    var N = parseInt(prompt("Ingrese N:", 115));

    if (N > 5) {
        N = 10;
    } else {
        N = 1;
    }
    alert(N)
}

function ifAbreviado() {
    var N = parseInt(prompt("Ingrese N:", 115));
    N = (N > 5) ? 10 : 1;
    alert(N);
}

function digitosNFOR() {
    var N = parseInt(prompt("Ingresar N", 3));

    if (N == 0) {
        alert(1 + " dígitos");
    } else {
        for (var cantidad = 0; N != 0; cantidad += 1) {
            N = parseInt(N / 10);
        }
        alert(cantidad + " dígitos");
    }
}

// Práctico Segundo Parcial



function digitosImpares() {
    var N = parseInt(prompt("Ingresar N", 3));
    var dig = 0;

    while (N != 0) {
        dig = N % 10;
        if (dig % 2 != 0) {
            alert(dig)
        }
        N = parseInt(N / 10);
    }
}

function sumatoria1a10() {
    var sumatoria = 0;
    var i = 1;

    while (i <= 10) {
        sumatoria += i;
        i++;
    }
    alert("sumatoria del 1 al 10: " + sumatoria);
}

function areaVolumenCilindro() {
    var r = parseInt(prompt("Ingrese el radio:", 10));
    var h = parseInt(prompt("Ingrese la altura:", 5));

    var Area = 0, Volumen = 0;

    Area = 2 * Math.PI * r * (r + h);
    Volumen = Math.PI * Math.pow(r, 2) * h;

    alert("El área es: " + Area);
    alert("El perímetro es: " + Volumen);
}

function mostrarNumPosNeg() {
    var N = parseInt(prompt("Ingresar N", 3));

    if (N == 0) {
        alert("Neutro");
    } else {
        if (N > 0) {
            alert("Positivo");
        } else {
            alert("Negativo");
        }
    }
}

function mostrarNumMenor() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 7));

    if (A > B) {
        alert(B + " es menor");
    } else {
        alert(A + " es menor");
    }
}

function NmultiploDeM() {
    var N = parseInt(prompt("Ingrese N:", 10));
    var M = parseInt(prompt("Ingrese M:", 5));

    if ((N % M) == 0) {
        alert(N + " es múltiplo de " + M);
    } else {
        alert(N + " no es múltiplo de " + M);
    }
}

function sumatoriaMultiplosTres() {
    var N = parseInt(prompt("Ingrese N:", 10));
    var sum = 0, dig = 0;
    
    while (N != 0) {
        dig = N % 10;
        if ((dig % 3) == 0) {
            sum += dig;
        }
        N = parseInt(N / 10);
    }

    alert(sum);
}

function sumAyBInclusivo() {
    var A = parseInt(prompt("Ingrese A:", 3));
    var B = parseInt(prompt("Ingrese B:", 9));
    var suma = 0;
    
    while (A <= B) {
        suma = suma + A;
        A = A + 1;
    }
    
    alert(suma);
}

function promedioNnotas() {
    var N = parseInt(prompt("Ingrese N:", 15));
    var suma = 0;
    var i = 0;
    
    while (i < N) {
        var nota = parseInt(prompt("Ingrese la nota:", 80));
        suma = suma + nota;
        i = i + 1;
    }
    
    suma = suma / N;
    alert(suma);
}

var myVarGlobal = "Hola Mundo";

function obtenerNombreCompleto(nombre, apellido) {
    var nombreCompleto = nombre + " " + apellido + " " + myVarGlobal;
    return nombreCompleto;
}

function obtenerEdad(edad) {
    edad = edad + 10;
    return edad;
}

function verificarMayorEdad(edad) {
    if (edad >= 18) {
        alert("Puedes pasar " + myVarGlobal);
    } else {
        alert("Vuelve cuando tengas 18 " + myVarGlobal);
    }
}

function funcionConReturn() {
    var myNombreCompleto = obtenerNombreCompleto("Ignacio", "Camacho");
    var myEdad = obtenerEdad(14);
    alert("Nombre: " + myNombreCompleto);
    alert("Edad: " + myEdad);
    verificarMayorEdad(myEdad);
}

// SECCIÓN DE CÓDIGO PARA LA CALCULADORA

// Dar un nuevo valor al INPUT "resultado" en la pag HTML.
function darValor(valor) {
    document.getElementById("resultado").value = valor;
}

// Obtener el valor actual del INPUT "resultado" en la pag HTML.
function obtenerValor() {
    var numero = document.getElementById("resultado").value;
    return numero;
}

// Adjuntar un nuevo valor a la derecha
// del INPUT "resultado" en la pag HTML
function adjuntarValor(numero) {
    var actualNumero = obtenerValor();
    var juntarNumero = actualNumero + "" + numero;
    darValor(juntarNumero);
}

function calcularFactorial(N) {
    var i = 1;
    var resp = 1;

    if (N >= 0) {
        if (N == 0) {
            return resp;
        } else {
            while (i <= N) {
                resp *= i;
                i += 1;
            }
            return resp;
        }
    } else {
        alert("No existe el factorial de un negativo.");
        return(N);
    }
}

function atras() {
    darValor(A);
}

function convBIN() {
    dec = obtenerValor();
    var bin = ""
    while (dec > 0) {
        bin = (dec % 2) + bin;
        dec = parseInt(dec / 2);
    }
    darValor(bin);
}

function factorial() {
    var actualValor = obtenerValor();
    darValor(calcularFactorial(actualValor));
}

function potencia() {
    A = obtenerValor();
    darValor("");
    operacion = "potencia";
}

function borrar() {
    darValor("");
}

function dividir() {
    A = obtenerValor();
    darValor("");
    operacion = "dividir";
}

function multiplicar() {
    A = obtenerValor();
    darValor("");
    operacion = "multiplicar";
}

function restar() {
    A = obtenerValor();
    darValor("");
    operacion = "restar";
}

function sumar() {
    A = parseInt(obtenerValor());
    darValor("");
    operacion = "sumar";
}

function igual() {
    var B = parseInt(obtenerValor());
    if (operacion == "potencia") {
        var res = NpotenciaDePconParams(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "dividir") {
        var res = dividirAyB(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "multiplicar") {
        var res = multiplicarAyB(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "restar") {
        var res = restarAyB(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "sumar") {
        var res = sumarAyB(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "MOD") {
        var res = ModAyB(A, B);
        darValor(res);
        operacion = "";
    }
}

function MOD() {
    A = obtenerValor();
    darValor("");
    operacion = "MOD";
}

function inverso() {
    var actualValor = obtenerValor();
    darValor(actualValor*(-1));
}

function numero(dig) {
    adjuntarValor(dig);
}

function NpotenciaDeP() {
    var N = parseInt(prompt("Ingrese N:", 3));
    var P = parseInt(prompt("Ingrese P:", 4));
    var i = 1, res = 1

    while (i <= P) {
        res = res * N
        i = i + 1
    }

    alert(res)
}

function NpotenciaDePconParams(N, P) {
    var i = 1, res = 1
    while (i <= P) {
        res = res * N
        i = i + 1
    }
    return res;
}

function dividirAyB(A, B){
    return A / B;
}

function multiplicarAyB(A, B){
    return A * B;
}

function restarAyB(A, B){
    return A - B;
}

function sumarAyB(A, B){
    return A + B;
}

function ModAyB(A, B){
    return A % B;
}

// Strings

function getCharByPosition() {
    var cadena = prompt("Ingrese una cadena", "Hola Mundo");
    var pos = parseInt(prompt("Ingrese una posición", 3));
    var caracter = cadena[pos];
    alert(caracter);
}

function joinTwoStrings() {
    var cadenaA = prompt("Ingrese la cadena A", "Hola");
    var cadenaB = prompt("Ingrese la cadena B", "Mundo");
    var cadenasUnidas = cadenaA + cadenaB;
    alert(cadenasUnidas);
}

function aCharFrequency() {
    var cadena = prompt("Ingrese una cadena", "Hola Mundo");
    var longCad = cadena.length;
    var i = 0;
    var frecuencia = 0;

    while (i < longCad) {
        var caracter = cadena[i];
        if (caracter == 'a'){
            frecuencia++;
        }
        i++;
    }
    alert("La frecuencia de 'a' es: " + frecuencia);
}

function myNameInASCII() {
    var var_P = String.fromCharCode(80);
    var var_a = String.fromCharCode(97);
    var var_b = String.fromCharCode(98);
    var var_l = String.fromCharCode(108);
    var var_o = String.fromCharCode(111);
    var var_space = String.fromCharCode(32);
    var var_I = String.fromCharCode(73);
    var var_g = String.fromCharCode(103);
    var var_n = String.fromCharCode(110);
    var var_a = String.fromCharCode(97);
    var var_c = String.fromCharCode(99);
    var var_i = String.fromCharCode(105);
    var var_o = String.fromCharCode(111);
    var var_C = String.fromCharCode(67);
    var var_a = String.fromCharCode(97);
    var var_m = String.fromCharCode(109);
    var var_a = String.fromCharCode(97);
    var var_c = String.fromCharCode(99);
    var var_h = String.fromCharCode(104);
    var var_o = String.fromCharCode(111);
    var var_G = String.fromCharCode(71);
    var var_u = String.fromCharCode(117);
    var var_t = String.fromCharCode(116);
    var var_i = String.fromCharCode(105);
    var var_e = String.fromCharCode(101);
    var var_r = String.fromCharCode(114);
    var var_r = String.fromCharCode(114);
    var var_e = String.fromCharCode(101);
    var var_z = String.fromCharCode(122);
    alert(var_P + var_a + var_b + var_l + var_o + var_space +
          var_I + var_g + var_n + var_a + var_c + var_i + var_o + var_space +
          var_C + var_a + var_m + var_a + var_c + var_h + var_o + var_space +
          var_G + var_u + var_t + var_i + var_e + var_r + var_r + var_e + var_z);
}

function isVocal(caracter) {
    return caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u' ||
           caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U';
}

function countVocals() {
    var cadena = prompt("Ingrese una cadena", "Hola Mundo");
    var longCad = cadena.length;
    var i = 0;
    var frecuencia = 0;

    while (i < longCad) {
        var caracter = cadena[i];
        if (isVocal(caracter)){
            frecuencia++;
        }
        i++;
    }
    alert("La cantidad de vocales es: " + frecuencia)
}

function countWords() {
    var cadena = prompt("Ingrese una cadena", "Hola Mundo");
    var longCad = cadena.length;
    var i = 0;
    var frecuencia = 1;

    while (i < longCad) {
        var caracter = cadena[i];
        if (caracter == " "){
            frecuencia++;
        }
        i++;
    }

    alert("La cantidad de palabras es: " + frecuencia)
}

function invertirPalabras(cadena) {
    var longCad = cadena.length;
    var i = 0;
    var invertido = "";

    while (i < longCad) {
        var caracter = cadena[i];
        invertido = caracter + invertido;
        i++;
    }

    alert(invertido)
}

function invertirPalabrasPorMayuscula() {
    var cadena = prompt("Ingrese una cadena", "HolaMundo");
    var i = 1;
    var invertido = cadena[0];

    alert(String.getC)
}