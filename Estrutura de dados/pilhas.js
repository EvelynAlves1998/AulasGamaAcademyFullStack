/*São estruturas de dados do tipo LIFO (last-in first-out), onde o último elemento a ser inserido, 
será o primeiro a ser retirado. Assim, uma pilha permite acesso a apenas um item de dados - o último inserido.
Para processar o penúltimo item inserido, deve-se remover o último.*/

/*São exemplos de uso de pilha em um sistema:
modelo VETOR;
COM TAMANHOS LIMITADOS;
ULTIMO QUE ENTRA PRIMERO QUE SAI;
Funções recursivas em compiladores;
Mecanismo de desfazer/refazer dos editores de texto;
Navegação entre páginas Web;
etc. */

var elementos	= [];
var  topo		= -1;
const max		= 10;

function push(num)
{
	if(topo < max)
	{
		topo = topo + 1;//primeira posição
		//elemento na posição topo vai ser igual ao numero que eu quero
		elementos[topo] = num;
	}
	else
	{
		console.log("A Pilha Está Cheia!");
	}
}

function EstaVazia()
{
	return topo == -1;
}

function pop()
{
	//se o topo for diferente de -1
	if(topo != -1)
	{
		//o numero recebe os elementos na posição topo
		let num = elementos[topo];
		//diminuo a posição do topo
		topo = topo -1;
		return num;
	}
	//senão
	else
	{
		console.log("A Pilha Está Vazia!");
	}

}

				//Utilizando a Pilha
// push(10);
// push(20);
// push(30);

// console.log("Elementos");
// console.log(pop());
// console.log(pop());
// console.log(pop());

//-----------------------------------------------------------------------------
//decimal para binario
// 10 / 2
// ->0 |  5 / 2
// 	 ->1 | 2 / 2
// 	 	 ->0 |  1 / 2
// 		  	  ->1 | 0
//pegar os restos da divisão na ordem inversa
//10 = 1010

//decimal para binario
var numDecimal = 10;
var resto;

console.log("Hora de Empilhar!");
while (numDecimal != 0)
{
	resto = parseInt(numDecimal % 2);
	push(resto);
	console.log(resto);
	numDecimal = parseInt(numDecimal / 2);
}
//Enquando a pilha nao estiver vazia
console.log("Desempilhando Tudo!.")//Ordem Inversa
while(!EstaVazia())
{
	console.log(pop());
}
