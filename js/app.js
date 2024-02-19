function adicionar () {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let quantidadeNoCarrinho = carrinho.querySelector('.texto-azul');
    let produtoNoCarrinho = carrinho.querySelector('.carrinho__produtos__produto');

    quantidadeNoCarrinho.textContent = quantidade;
    produtoNoCarrinho.textContent = produto;
}