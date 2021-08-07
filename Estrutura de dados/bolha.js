var valores = [8,7,6,5,4,3,2,1];

//jogar o maior valor para o fim	
function ordena()
{
	let inicio = 0;
	let fim = 8;
	let tmp;

	//PARA posição igual a inicio,enquanto a posição for menor que fim - 1 e -1 para chegar ao
	//penultimo valor para poder comparar ele com o proximo
	for(vezes = 0;vezes < 8; vezes++)
	{
		for(pos = inicio; pos < fim - 1 - vezes; pos++)
		{
			if(valores[pos] > valores[pos + 1])
			{
				tmp = valores[pos];
				valores[pos] = valores[pos + 1];
				valores[pos + 1] = tmp;
			}
		}
	}
}

ordena();
console.log("Vetor Ordenado");
console.log(valores);