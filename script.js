botao.addEventListener('click', verificarPreço)
function verificarPreço(){
    
    var país = window.document.querySelector('input#país').value
    var preço = window.document.querySelector('span#preço')
    var info = window.document.querySelector('div#info')

    if (país == 'Brasil' || país == 'brasil') {
        preço.innerHTML = 'R$1.00, parça!'
    }
    else if (país == 'eua' || país == 'EUA' || país == 'estados unidos' || país == 'Estados unidos' || país == 'Estados Unidos') {
        preço.innerHTML = 'R$20 conto estadunidense fdp!! <p>PRA GRINGO É MAIS CARO!!!</p>'
    }
    else if (país == 'Argentina' || país == 'argentina' || país == 'Bolivia' || país == 'bolivia' || país == 'Chile' || país == 'chile' || país == 'Colômbia' || país == 'colômbia' || país == 'Colombia' || país == 'colombia' || país == 'Costa Rica' || país == 'Costa rica' || país == 'costa rica' || país == 'Cuba' || país == 'cuba' || país == 'Equador' || país == 'equador' || país == 'El Salvador' || país == 'El salvador' || país == 'el salvador' || país == 'Guatemala' || país == 'guatemala' || país == 'Haiti' || país == 'haiti' || país == 'Honduras' || país == 'honduras' || país == 'México' || país == 'Mexico' || país == 'méxico' || país == 'mexico' || país == 'Nicarágua' || país == 'nicarágua' || país == 'Nicaragua' || país == 'nicaragua' || país == 'Panamá' || país == 'panamá' || país == 'Panama' || país == 'panama' || país == 'Paraguai' || país == 'paraguai' || país == 'Peru' || país == 'peru' || país == 'República Dominicana' || país == 'República dominicana' || país == 'república dominicana' || país == 'Republica Dominicana' || país == 'Republcia dominicana' || país == 'republica dominicana' || país == 'Uruguai' || país == 'uruguai' || país == 'Venezuela' || país == 'venezuela' ) {
        preço.innerHTML = 'R$1.00, hermano!'
    }
    else {
        preço.innerHTML = 'R$20 conto fi!! <p><strong>PRA GRINGO É MAIS CARO!!!</strong></p>'
    }
    function mostrarTabela () {
        info.innerHTML += '<ul><li><strong>"Brasil": </strong> "R$1.00, parça!"</li><li><strong>"EUA" ou "Estados Unidos": </strong> "R$20 conto estadunidense fdp!! PRA GRINGO É MAIS CARO!!!"</li><li><strong>Países latinos: </strong> "R$1.00, hermano!"</li><li><strong>Outros países: </strong> "R$20 conto fi!! PRA GRINGO É MAIS CARO!!!"</li></ul>'
    }

    info.innerHTML = 'Quer ver todos os preços? <a href="#tabela" id="linkTabela" onclick="mostrarTabela()"> Clique aqui! </a>'
    linkTabela.addEventListener('click', mostrarTabela)
}

function checkEnter(event) { // Declaração da função checkEnter()
    if (event.keyCode === 13) { // Verificando se o código da tecla pressionada é 13 (código da tecla "Enter")
        verificarPreço(); // Chamando a função multar()
    }
}