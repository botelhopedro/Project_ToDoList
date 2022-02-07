let bancoDeElementos = [];

function criaTarefa(){
    let valorSelecionado;
    valorSelecionado = document.getElementById('content').value;
    bancoDeElementos.push(valorSelecionado);
    imprimeTarefa();
}

function verificaTarefa(valor, edicao){
    if(valor == -1){
        let elementoEditado = document.getElementById('input'+edicao);
        if(elementoEditado.value == ""){
            alert("Digita alguma coisa ai, fazendo um favor");
        }
        else{
            imprimeTarefa();   
        }
    }
    else{
        let elementoEntrada = document.getElementById('content');
        if(elementoEntrada.value == ""){
            alert('Digite algo para fazer, cabeça de vento');
        }
        else{
            criaTarefa();
    }
    }
    
}

function imprimeTarefa(){
    let htmlImprime, elementoEntrada;
    elementoEntrada = document.getElementById('content');
    htmlImprime = document.getElementById('output');
    elementoListado = "";  
    for (i = 0; i < bancoDeElementos.length; i++) {
        elementoListado += "<div class=\'div" + i + "\' id=\'div" + i + "\' >" + (i+1) + ". " + bancoDeElementos[i] + "<button type=\'button\' class=\'botao" + i + "\' onclick=\'apagaTarefa(" + i + ")\'> X </button> <button type=\'button\' class=\'botao2\' onclick=\'editaTarefa(" + i + ")\'> Edit </button> <br>"    + "</div>";
    };
    htmlImprime.innerHTML = elementoListado;
    document.getElementById('content').value = "";
    elementoEntrada.focus;
}

function apagaTarefa(i){
    bancoDeElementos.splice(i, 1)
    imprimeTarefa();
}


function editaTarefa(i){
    let elementoEntrada = document.getElementById('div' + i);
    let elementoListado = "<input type=\'text\' class='\input"+ i +"\' id='\input"+ i +"\'><button type=\'button\' class=\'botao" + i + "\' onclick=\'imprimeTarefa(" + i + ")\'> X </button> <button type=\'button\' class=\'botao2\' onclick=\'alteraTarefa(" + i + ")\'> Edit </button>";
    elementoEntrada.innerHTML = elementoListado;
}

function alteraTarefa(i){
    let alterador = document.getElementById('input'+i).value;
    bancoDeElementos[i] = alterador;
    verificaTarefa(-1, i);
}

document.addEventListener('keydown', function (e){
    if(e.keyCode == 13){
        e.preventDefault();
        return verificaTarefa()
    }
})
