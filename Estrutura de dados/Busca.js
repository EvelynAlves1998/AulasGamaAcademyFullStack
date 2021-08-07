/** Algoritmos de busca verificam se uma dada informação ocorre em uma sequência ou não. 
 */
//Busca sequencial 
//----------------------------------
//Busca Binária
/*tem que estar ordenada
pesquisa binária começará examinando o item do meio. 
Se esse item for o que estamos procurando, estamos prontos. 
Se não for o item correto,
 podemos usar a natureza ordenada da lista para eliminar metade dos itens restantes. 
Se o item que procuramos for maior do que o item do meio, 
sabemos que toda a metade inferior da lista, bem como o item do meio, 
podem ser eliminados de uma análise posterior.
O item, se estiver na lista, deve estar na metade superior.*/
var valores = [5,8,10,22,38,45,60,90,100,120];

function busca(num)
{
	for(i = 0; i < 6;i++)
	{
		if(num == valores[i])
		{
			return i;
		}
	}
	return -1;
}

function buscaBin(num)
{
	let inicio, fim;
	let meio;
	let passos = 0;
	inicio = 0;
	fim = 9;
	while(inicio <= fim)
	{
		meio = parseInt((inicio + fim) / 2);
		passos = passos + 1;
		if(num == valores[meio])
		{
			console.log("Achei em " + passos + "passos");
			return meio;
		}
		else
		{
			if(num > valores[meio])
			{
				inicio = meio + 1;
			}
			else
			{
				fim = meio - 1;
			}
		}
	}
	console.log("nao achei em " + passos + "passos");
	return -1;
}

//Utilizando a busca
// console.log(busca(10));
// console.log(busca(50));
console.log(buscaBin(10));
console.log();
console.log(buscaBin(60));
console.log(buscaBin(50));


