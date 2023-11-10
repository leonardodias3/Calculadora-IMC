const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');
const button = document.getElementById('button');

const getText = (imc) => {
	if (imc > 40) return 'Obsidade grau III';
	if (imc > 35) return 'Obsidade grau II';
	if (imc > 30) return 'Obsidade grau I';
	if (imc > 25) return 'Um pouco a cima do peso';
	if (imc > 18,5) return 'peso ideal';
	return 'Abaixo do peso';
}

const formImc = () => {
	const valorImc = (+peso.value / (+altura.value * altura.value)).toFixed(1);
	resultado.textContent = `${nome.value} - ${getText(valorImc)}`;
}

button.addEventListener('click', formImc);