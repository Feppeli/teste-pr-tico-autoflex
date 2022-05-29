var produtoNome = document.querySelector('#nome')
var produtoValor = document.querySelector('#valor')
var produtoCdg = document.querySelector('#cdg')
var produtoQnt = document.querySelector('#qnt')

function salvandoDados(nome, valor, cdg, qnt) {
   var nome = produtoNome.value
   var valor = produtoValor.value
   var cdg = produtoCdg.value
   var qnt = produtoQnt.value

    var dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if (dados == null) {
        localStorage.setItem("dadosProduto", "[]")
        dados = [];
    }

    var auxRegistro = {
        nome: nome,
        valor: valor,
        código: cdg,
        quantidade: qnt
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosProduto", JSON.stringify(dados))
    alert("Registro incluido com sucesso")
    alert(dados.length)


    var getDados = getItem("dadosProduto")
    console.log(getDados)
}




