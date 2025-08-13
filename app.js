let amigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo === "") {
    alert("Por favor, insira um nome");
  } else {
    amigos.push(amigo);
    limparCampo(amigo);
  }
  atualizarAmigos(amigos);
}

function limparCampo(amigo) {
  amigo = document.querySelector("input");
  amigo.value = "";
}

function atualizarAmigos(amigos) {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (!!amigos.length) {
    let sorteado = Math.floor(Math.random() * amigos.length);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = amigos[sorteado];

    amigos.splice(sorteado, 1);
    atualizarAmigos(amigos);
  } else {
    alert("Não há nomes na lista");
  }
}
