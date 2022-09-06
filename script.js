const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

//cambiar la vocal "a" por "atys"
//cambiar la vocal "e" por "enter"
//cambiar la vocal "i" por "imes"
//cambiar la vocal "o" por "ober"
//cambiar la vocal "u" por "ufat"

function encriptar(stringEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","atys"],["o","ober"],["u","ufat"]];
    //creacion de variable stringEncriptada
    stringEncriptar = stringEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptar
};
function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","atys"],["o","ober"],["u","ufat"]];
    //creacion de variable stringDesencriptada
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptar
};
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
};
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    inputTexto.value = ""
};
function btnCopiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("copiado!")
};