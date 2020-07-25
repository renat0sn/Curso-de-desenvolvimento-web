var vida = 3;
var matou = false;
var fimDeJogo = false;
var tempoDeJogo = 1;

//Limpa a tela de menu e dispara função de jogo
function iniciarJogo(){
	telaJogo();
	cronometro();
	var dificuldade = document.getElementById('dificuldade').value;
	jogo(dificuldade);
	
}

//Mecânicas relacionadas à dinâmica do jogo
function jogo(dificuldade){
	var tempo = 0.0;

	if(dificuldade == 'normal'){
		tempo = 2000.0;
	}
	else if(dificuldade == 'dificil'){
		tempo = 1700.0;
	}
	else{
		tempo = 1300.0;
	}

	var captClick = document.getElementById('mosca-jogo');
	captClick.addEventListener("mousedown", mataMosquito, false);

	novoMosquito();
	var loop = function(){
		if(!matou){
			if(vida == 1){
				telaDerrota();
				fimDeJogo = true;
			}
			else
				perdeMosquito();
		}

		var novoTempo = tempo;
		if(tempoDeJogo > 10 && tempoDeJogo <= 30) novoTempo = tempo * 0.9;
		else if(tempoDeJogo > 30 && tempoDeJogo <= 50) novoTempo = tempo * 0.8;
		else if(tempoDeJogo > 50 && tempoDeJogo <= 80) novoTempo = tempo * 0.7;
		else if(tempoDeJogo > 80) novoTempo = tempo * 0.6;

		if(!fimDeJogo){
			novoMosquito();
			setTimeout(loop, novoTempo);
		} 	
		console.log(novoTempo);
	}
	var x = setTimeout(loop, tempo);
}

function novoMosquito(){
	var X = (gerarNumero(0, 92)).toString();
	var Y = (gerarNumero(0, 87)).toString();
	document.getElementById('mosca-jogo').style.display = "block";
	document.getElementById('mosca-jogo').style.top = Y + '%';
	document.getElementById('mosca-jogo').style.left = X + '%';
	matou = false;
}

function perdeMosquito(){
	document.getElementById('mosca-jogo').style.display = "none";
	document.getElementById('vida-' + vida.toString()).src = "img/coracao_vazio.png";
	vida--;
}

function mataMosquito(){
	document.getElementById('mosca-jogo').style.display = "none";
	matou = true;
}

function gerarNumero(min,max){
	return Math.floor(Math.random()*max + min);
}

function cronometro(){
	var x = setInterval(function() {
		document.getElementById('segundos').innerHTML = tempoDeJogo;
		tempoDeJogo++;
		if(tempoDeJogo > 100 && fimDeJogo == false){ 
			clearInterval(x);
			telaVitoria();
			fimDeJogo = true;
		}
	}, 1000);
}

function telaJogo(){
	limparTela();
	document.getElementById('jogo').style.display = "flex";
}

function telaVitoria(){
	limparTela();
	document.getElementById('vitoria').style.display = "flex";
}

function telaDerrota(){
	limparTela();
	document.getElementById('derrota').style.display = "flex";
}

function limparTela(){
	document.getElementById('telaInicial').style.display = "none";
	document.getElementById('jogo').style.display = "none";
	document.getElementById('vitoria').style.display = "none";
}