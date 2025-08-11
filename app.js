//pra mim e pra você que somos inciantes, coloquei alguns comentários só para nãos nos perdermos
let listaDeAmigos = [];

// 1. Funções de evento para os botões e input
document.addEventListener('DOMContentLoaded', () => {
    // Captura os elementos do DOM uma vez para usar em todas as funções
    const inputAmigo = document.getElementById('amigo');
    const adicionarBtn = document.querySelector('.button-add');
    const sortearBtn = document.querySelector('.button-draw');

    adicionarBtn.addEventListener('click', adicionarAmigo);
    sortearBtn.addEventListener('click', sortearAmigo);
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
});

// 2. Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada com o ID "amigo"
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    // Valida a entrada: verifica se o nome não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualiza o array de amigos: adiciona o nome com o método .push()
    listaDeAmigos.push(nome);
    console.log("Array de amigos atualizado:", listaDeAmigos);

    // Limpa o campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();

    // Atualiza a lista visual na página
    renderizarListaVisual();
}

// 3. Função para atualizar o conteúdo da lista visual
function renderizarListaVisual() {
    const listaAmigosUl = document.getElementById('listaAmigos');
    
    // Limpa a lista existente para evitar duplicatas
    listaAmigosUl.innerHTML = '';

    // Percorre o array de amigos com um loop 'for'
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const amigo = listaDeAmigos[i];
        
        // Cria e adiciona os elementos à lista
        const novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        novoItem.className = 'name-item';
        listaAmigosUl.appendChild(novoItem);
    }
}

// 4. Função para sortear o amigo secreto
function sortearAmigo() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para fazer o sorteio!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    resultadoDiv.innerHTML = `<p class="result-text">${amigoSorteado} foi o amigo sorteado!</p>`;
    console.log("Amigo sorteado:", amigoSorteado);

}