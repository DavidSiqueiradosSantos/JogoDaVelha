const casas = document.querySelectorAll(".Casa");

let checarTurno = true;
const Jogador_X = "X";
const Jogador_O = "O";






const Combinações = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]



]

document.addEventListener("click", (event) => {
	if (event.target.matches(".Casa")) {
		Jogar(event.target.id);
	}


});


function Jogar(id) {
	const casa = document.getElementById(id);
	turno = checarTurno ? Jogador_X : Jogador_O;
	casa.textContent = turno;
	casa.classList.add(turno);
	checarVencedor(turno);


}

function ReiniciarJogo() {
	for (var i = 0; i < 9; i++) {
		casas[i].value = ''; //Limpa todas as casas
		casas[i].style.color = '#a9a9a9'; //Torna o valor _ invisível
	}
	vencedor = ''; //Reseta o vencedor

	const telaescura = document.getElementById("TelaEscura");
	const Reiniciar = document.getElementById("reiniciar");
	let mensagem = null;

	telaescura.style.display = "block";
	telaescura.appendChild(Reiniciar);

	let contador = 3;
	setInterval(() => {
		Reiniciar.innerHTML = `Reiniciando o Jogo em... ${contador--}`;
		
	}, 1000);

	setTimeout(() => location.reload(), 3000);

}

function checarVencedor(turno) {
	const vencedor = Combinações.some((comb) => {
		return comb.every((index) => {
			return casas[index].classList.contains(turno);


		})

	});

	if (vencedor) {
		encerrarJogo(turno);
	} else if (houverEmpate()) {
		encerrarJogo();

	} else {
		checarTurno = !checarTurno;

	}

}

function houverEmpate() {
	let x = 0;
	let o = 0;

	for (index in casas) {
		if (!isNaN(index)) {
			if (casas[index].classList.contains(Jogador_X)) {
				x++;

			}
			if (casas[index].classList.contains(Jogador_O)) {
				o++;
			}
		}

	}

	return x + o == 9 ? true : false;

}
function encerrarJogo(vencedor = null) {

	const telaescura = document.getElementById("TelaEscura");
	const p = document.createElement("p");
	const Reiniciar = document.getElementById("reiniciar");
	let mensagem = null;

	telaescura.style.display = "block";
	telaescura.appendChild(p);
	telaescura.appendChild(Reiniciar);


	if (vencedor) {
		p.innerHTML = `O jogador <span>${vencedor}</span> venceu!`;

	} else {
		p.innerHTML = "Velha!";
	}

	let contador = 3;
	setInterval(() => {
		Reiniciar.innerHTML = `Recomeçando o Jogo em... ${contador--}`;
	}, 1000);

	setTimeout(() => location.reload(), 4000);
}






