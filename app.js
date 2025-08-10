let listaAmigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo === "") {
    alert("Por favor, insira um nome");
  } else {
    listaAmigos.push(amigo);
    limparCampo();
  }
}

function limparCampo() {
  amigo = document.querySelector("input");
  amigo.value = "";
}
