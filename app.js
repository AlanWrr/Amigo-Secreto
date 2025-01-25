let amigos = [];
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome) {
    amigos.push(nome);
    atualizarLista();
    input.value = '';
  } else {
    alert('Por favor, digite um nome válido.');
  }
}
function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}
function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos dois amigos para sortear.');
    return;
  }
  const resultados = [];
  const amigosSorteados = [...amigos];
  amigos.forEach((amigo) => {
    let indiceSorteado;
    do {
      indiceSorteado = Math.floor(Math.random() * amigosSorteados.length);
    } while (amigosSorteados[indiceSorteado] === amigo);
    resultados.push({ amigo, sorteado: amigosSorteados[indiceSorteado] });
    amigosSorteados.splice(indiceSorteado, 1);
  });
  mostrarResultados(resultados);
}
function mostrarResultados(resultados) {
  const resultadoLista = document.getElementById('resultado');
  resultadoLista.innerHTML = '';
  resultados.forEach(({ amigo, sorteado }) => {
    const li = document.createElement('li');
    li.textContent = `${amigo} sorteou ${sorteado}`;
    resultadoLista.appendChild(li);
  });
}
