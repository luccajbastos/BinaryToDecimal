const saida = document.getElementById("saida");

function decimal(v){
    var binario = v.split('');
        for(let i=0;i<binario.length;i++){
            if(binario[i] != 1 && binario[i]!=0){
                return saida.value = "Erro! Não é um binário.";
                break;
            }
        }
        if(binario.length <8){
            return saida.value = "Erro! Menos de 8 números binários.";
        }
    return parseInt(binario.join(""), 2);
}

document.getElementById("entrada").addEventListener('change', (event) => {
    const digitos = document.getElementById("entrada").value;
    
    saida.value = decimal(digitos);   
})