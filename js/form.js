let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let texto = document.querySelector('#mensagem');
let botao = document.querySelector('#form-botao');
let mensagem = '';

nome.addEventListener('blur', (evento) => {
	valida(evento.target);
});

email.addEventListener('blur', (evento) => {
	valida(evento.target);
});

assunto.addEventListener('blur', (evento) => {
	valida(evento.target);
});

texto.addEventListener('blur', (evento) => {
	validaMensagem(evento.target);
});

function valida(input) {
	if (input.value == '') {
		mensagem = 'Este campo não pode estar em branco!'
	} if (!input.value == '') {
		mensagem = '';
	}

	if (input.value.length > 50) {
		mensagem = 'Limite de 50 caracteres atingido!'
	}
	input.setCustomValidity(mensagem);
}

function validaMensagem(textarea) {
	if (textarea.value == '') {
		mensagem = 'Este campo não pode estar em branco!'
	}

	if (textarea.value.length > 300) {
		mensagem = 'Limite de 300 caracteres atingido!'
	}
	textarea.setCustomValidity(mensagem);
}

function enviarForm() {
	alert('Enviado com sucesso!');
	document.querySelector('form').reset();
}