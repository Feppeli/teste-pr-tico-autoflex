var produtoNome = document.querySelector('#nome')
var produtoValor = document.querySelector('#valor')
var produtoCdg = document.querySelector('#cdg')
var produtoQnt = document.querySelector('#qnt')

function salvandoDados(nome, valor, cdg, qnt) {
   var nome = produtoNome.value
   var valor = produtoValor.value
   var cdg = produtoCdg.value
   var qnt = produtoQnt.value

   var auxJsonProdutos = {
       nome: nome,
       valor: valor,
       codigo: cdg,
       quantidade: qnt
   } 
   var jsonProdutos = JSON.stringify(auxJsonProdutos)

   localStorage.setItem('dados', jsonProdutos)
   alert('Produto registrado')

   
    
}




