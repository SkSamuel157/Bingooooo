window.onload = comecar;

function comecar() {
    novaCartela(); //cria uma nova cartela
    document.getElementById("recarregar").onclick = outraCartela; //Vai gerar uma nova cartela quando clicar no "CLIQUE AQUI";
}

function novaCartela() {
    for (let i = 0; i < 24; i++) {
        numero(i); // Função que recebe a posição por parãmetro
    }
}

//declarando o Array que guarda todos os números possiveis dentro do BINGO
let uNumeros = new Array(76);

//declarando o array com as colunas do BINGO
let coluna = new Array(
    0, 0, 0, 0, 0, //B
    1, 1, 1, 1, 1, //I
    2, 2, 2, 2,    //N
    3, 3, 3, 3, 3, //G
    4, 4, 4, 4, 4 //O
);

function numero(thisNumero) {
    let pNumero = "quadrado" + thisNumero; //pNumero recebe a posição do numero e identifica ele no HTML

    let baseColuna = coluna[thisNumero] * 15; //cada coluna gera numeros em um intervalor de15 numeros

    let novoNumero;

    do {
        novoNumero = baseColuna + getNovoNumero() + 1
    } while (uNumeros[novoNumero]);

    uNumeros[novoNumero] = true;

    document.getElementById(pNumero).innerHTML = novoNumero;
    document.getElementById(pNumero).classList = ""
    document.getElementById(pNumero).onmousedown = trocaCor

}

function getNovoNumero() {
    return Math.floor(Math.random() * 15);
}

function outraCartela() {
    for (let i = 1; i < uNumeros.length; i++) {
        uNumeros[i] = false
    }
    novaCartela();
    return false;
}

function trocaCor(evt) {
    if(evt){
        thisNumero = evt.target;
    }

    if(thisNumero.className == "") {
        thisNumero.className = "trocaCor";
    }else{
        thisNumero.className = ""
    }
}