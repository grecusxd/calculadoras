const celulas = document.querySelectorAll(".celula");
let fimDeJogo = false;

const Jogador_X = "X";
const Jogador_O = "O";

const combinacoes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

document.addEventListener("click", (event) => {
  if (event.target.matches(".celula")) {
    jogar(event.target.id, Jogador_X);
    setTimeout(() => bot(), 500);
  }
});

function bot() {
  const posicoesDisponiveis = [];
  for (index in celulas) {
    if (!isNaN(index)) {
      if (
        !celulas[index].classList.contains("X") &&
        !celulas[index].classList.contains("O")
      ) {
        posicoesDisponiveis.push(index);
      }
    }
  }

  const posicaoAletorira = Math.floor(
    Math.random() * posicoesDisponiveis.length
  );
  if (!fimDeJogo) {
    jogar(posicoesDisponiveis[posicaoAletorira], Jogador_O);
  }
}

function jogar(id, turno) {
  const celula = document.getElementById(id);
  celula.textContent = turno;
  celula.classList.add(turno);
  checarVencedor(turno);
}
function checarVencedor(turno) {
  const vencedor = combinacoes.some((comb) => {
    return comb.every((index) => {
      return celulas[index].classList.contains(turno);
    });
  });

  if (vencedor) {
    encerraJogo(turno);
  } else if (checarEmpate()) {
    encerraJogo();
  }
}
function checarEmpate() {
  let X = 0;
  let O = 0;

  for (index in celulas) {
    if (!isNaN(index)) {
      if (celulas[index].classList.contains(Jogador_X)) {
        X++;
      }

      if (celulas[index].classList.contains(Jogador_O)) {
        O++;
      }
    }
  }

  return X + O === 9 ? true : false;
}

function encerraJogo(vencedor = null) {
  fimDeJogo = true;
  const telaEscura = document.getElementById("telaEscura");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  let mensagem = null;

  telaEscura.style.display = "block";
  telaEscura.appendChild(h2);
  telaEscura.appendChild(h3);

  if (vencedor) {
    h2.innerHTML = `O player <span>${vencedor}</span> venceu`;
  } else {
    h2.innerHTML = "Empatou";
  }

  let contador = 3;
  setInterval(() => {
    h3.innerHTML = `Reiniciando em ${contador--}`;
  }, 1000);

  setTimeout(() => location.reload(), 4000);
}
