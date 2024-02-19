function adicionar () {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');

    carrinho.querySelector('.carrinho__produtos__produto').textContent = produto;
    carrinho.querySelector('.texto-azul').textContent = `${quantidade}x`;
    
}