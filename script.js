/*a --> ai 
e --> enter 
i --> imes 
o --> ober
u --> ufat*/


function encriptar() {
    var texto = document.getElementById("texto-usuario").value.toLowerCase();
    var cifrado = texto.replace(/e/igm, "enter");
    cifrado = cifrado.replace(/i/igm, "imes");
    cifrado = cifrado.replace(/o/igm, "ober");
    cifrado = cifrado.replace(/a/igm, "ai");
    cifrado = cifrado.replace(/u/igm, "ufat");
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("copiar").style.display = "inherit";
}


function desencriptar () {
    var texto = document.getElementById("texto-usuario").value.toLowerCase();
    var cifrado = texto.replace(/enter/igm, "e");
    cifrado = cifrado.replace(/imes/igm, "i");
    cifrado = cifrado.replace(/ober/igm, "o");
    cifrado = cifrado.replace(/ai/igm, "a");
    cifrado = cifrado.replace(/ufat/igm, "u");
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "inherit";
}


function copiar() {
    var contenido = document.getElementById("texto2");
    contenido.select();
    document.execCommand("copy");
    console.log("Texto copiado");
}

