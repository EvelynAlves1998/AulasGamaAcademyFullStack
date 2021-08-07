console.log("javascript carregado");

function validacpf(cpf)
{
	console.log(cpf.length);
	if(cpf.length != 11)
	{
		return false;
	}
	else
	{
		let numeros = cpf.substring(0, 9);
		let digitos = cpf.substring(9);

		let soma = 0;
		for(let i = 10; i > 1; i--)
		{
			soma += numeros.charAt(10 - 1) * i;

		}

		let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

		//Validação 1° Digito
		if(resultado != digitos.charAt(0))
		{
			return false;
		}
		
		soma = 0;

		numeros = cpf.substring(0, 10);

		for(let k = 11; k > 1; k--)
		{
			soma += numeros.charAt(11 - k) * k;
		}

		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

		//Validação 2° Digito
		if(resultado != digitos.charAt(1))
		{
			return false;
		}
		
		return true;
	}
	
}

function validacao()
{
	console.log("iniciando validação cpf");

	document.getElementById('success').style.display = 'none';
	document.getElementById('error').style.display = 'none';

	let cpf = document.getElementById('cpf_digitado').value;
	
	let resultadovalidacao = validacpf(cpf);

	if(resultadovalidacao)
	{
		document.getElementById('success').style.display = 'block';
	}
	else
	{
		document.getElementById('error').style.display = 'block';
	}
}