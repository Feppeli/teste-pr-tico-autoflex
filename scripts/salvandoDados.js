var produtoNome = document.querySelector('#nome')
var produtoValor = document.querySelector('#valor')
var produtoCdg = document.querySelector('#cdg')
var produtoQnt = document.querySelector('#qnt')




function recuperandoDados() {
    var objetos = Object.values(localStorage)
    console.log(objetos)

    var productObject = objetos.map(function(key){
        return JSON.parse(key)
    })
    console.log(productObject)
    console.log(productObject)
    productObject.map(function (key) {
        document.querySelector('#produtosCadastrados').innerHTML += "<div id='produto' style='background: red'>" + "<p>" + key.nome + "</p>" + "</div>"
    })
    

}
recuperandoDados()


// função salvando dados
function salvandoDados(nome, valor, cdg, qnt) {

    // separando os valores do formulário
    var nome = produtoNome.value
    var valor = produtoValor.value
    var cdg = produtoCdg.value
    var qnt = produtoQnt.value

    // criando um objeto com os valores
    var auxJsonProdutos = {
        nome: nome,
        valor: valor,
        codigo: cdg,
        quantidade: qnt
    }

    // Transformando o objeto em JSON
    var jsonProdutos = JSON.stringify(auxJsonProdutos)

    // Gerando ID dinamico
    var gerarId = localStorage.length + 1;

    // Setando os itens dentro do localstorage
    localStorage.setItem(gerarId, jsonProdutos)
    alert('Produto registrado')




    /*
    //Apagando ementos
    const deletarProdutos = document.querySelector('#produto')
    if(deletarProdutos){
        deletarProdutos.parentNode.removeChild(deletarProdutos)
    }else{
        console.log('produtos não encontrados')
    }*/








    /*

    //recuperando os dados
    var objetos = Object.values(localStorage)
    console.log(objetos)

    // Inserindo os dados na tela
    objetos.map(function (produto) {
        document.querySelector('#produtosCadastrados').innerHTML += "<div id='produto' style='background: red'>" + "<p>" + produto.nome + "</p>" + "</div>"
    })



    */







    /*
    // transoformando os dados em array
    var conteudo = Object.keys(objetos).map(function (key) {
       // return [Number(key), objetos[key]]
 
       return [objetos[key]]
    });
    console.log(conteudo)
    
}*/

location.reload()



}

