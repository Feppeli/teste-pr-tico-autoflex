
// função salvando dados 
function salvandoDados() {
    var produtoNome = document.querySelector('#nome')
    var produtoValor = document.querySelector('#valor')
    var produtoCdg = document.querySelector('#cdg')
    var produtoQnt = document.querySelector('#qnt')

    // separando os valores do formulário 
    let nome = produtoNome.value
    let valor = produtoValor.value
    let cdg = produtoCdg.value
    let qnt = produtoQnt.value

    // criando um objeto com os valores 
    let auxJsonProdutos = {
        nome: nome,
        valor: valor,
        codigo: cdg,
        quantidade: qnt
    }

    // Transformando o objeto em JSON 
    let jsonProdutos = JSON.stringify(auxJsonProdutos)

    // Gerando ID dinamico 
    let gerarId = localStorage.length + 1;

    // Setando os itens dentro do localstorage 
    localStorage.setItem(gerarId, jsonProdutos)
    alert('Produto registrado')



    console.log(Object.values(localStorage))

    //recuperando os dados 
    let objetos = Object.values(localStorage)
    listItem(gerarId)

    // Inserindo os dados na tela 

    // transoformando os dados em array 
    var conteudo = Object.keys(objetos).map(function (key) { 
          // return [Number(key), objetos[key]] 
    
          return [objetos[key]] 
       }); 
       console.log(JSON.parse(conteudo)) 


}


/*
function listItem(key) {
    console.log(key, JSON.parse(localStorage.getItem(key)))
    let productObject = JSON.parse(localStorage.getItem(key)) // transformando o localStorage em arquivo json

    console.log(productObject.nome)
    document.body.innerHTML += `<div><p>${productObject.nome}</p>
    <p>${productObject.valor}</p>
    </div>`
}
*/