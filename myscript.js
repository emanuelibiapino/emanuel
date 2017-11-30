function validar(){
	if (document.form.nome.value == "") {
		alert('Por favor, preencha o campo com o seu nome.');
		document.nome.focus();
		return false;
	}else if (document.form.email.value == "" || document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.')==-1) {
		alert('Por favor, digite um endereço de email válido.');
		document.email.focus();
		return false;
	}else if (document.form.sexo[0].checked == false && document.form.sexo[1].checked == false) {
		alert('Por favor, selecione o seu sexo.');
		return false;
	}else if (document.form.texto.value==""){
		alert( "Preencha o campo MENSAGEM!" );
		document.dados.tx_mensagem.focus();
		return false;
	}else if (document.form.texto.value.length < 30 ){
		alert( "É necessario preencher o campo MENSAGEM com mais de 30 caracteres!" );
		document.dados.tx_mensagem.focus();
		return false;
	}else {
		alert('Enviado');
		return false;	
	}

	
}
 
