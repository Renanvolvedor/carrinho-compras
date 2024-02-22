 //valor total que se inicia em 0 pois não há nada no carrinho:
//(tem que estar fora da função se não cada vez que o botão for clicado, o total vai zerar)
let total = 0;

function adicionar () {
    //recupera a string com as informações do produto:
    let produto = document.getElementById('produto').value;
    //separa a informação do produto em nome e valor:
    let nomeProduto = produto.split('-')[0]; //busca o '-' do produto e traz o que vem antes [0].
    let valorProduto = produto.split('R$')[1]; //busca o 'R$' do produto e traz o quem depois [1].
    //recupera a quantidade do produto:
    let quantidade = document.getElementById('quantidade').value;
    //calcula o subtotal, valor * quantidade:
    let subTotal = valorProduto * quantidade;
    //recupera o campo carrinho:
    let carrinho = document.getElementById('lista-produtos');
    //adiciona o produto e a quantidade escolhidas no carrinho:
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`; //para o produto anterior não ser substituido adicionamos o carrinho.HTML nele de novo para que
                    //seja acumulativo
    //atualiza o total com o produto escolhido, adicionando-o ao valor anterior:
    total = total + subTotal;
    //recupera o campo com o total:
    let totalDoCarrinho = document.getElementById('valor-total');
    totalDoCarrinho.innerHTML = `<span class="texto-azul" id="valor-total">R$${total}</span>`
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    //zera todos os campos do HTML:
    produto.innerHTML = `<select class="produto-input" name="produto" id="produto">
        <option value="Fone de ouvido - R$100">Fone de ouvido - R$100</option>
        <option value="Celular - R$1400">Celular - R$1400</option>
        <option value="Oculus VR - R$5000">Oculus VR - R$5000</option>
        </select>`;
    document.getElementById('quantidade').value = 0;
    document.getElementById('lista-produtos').innerHTML = 'Nenhum produto no carrinho.';
    document.getElementById('valor-total').innerHTML = '';
    //reseta o subtotal e total:
    subTotal = 0;
    total = 0;
}