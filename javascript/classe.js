class Matematica
{
	soma(valorA,valorB)
	{
		return valorA + valorB;
	}
	subtracao(valorA,valorB)
	{
		return valorA - valorB;
	}
	multiplicacao(valorA,valorB)
	{
		return valorA * valorB;
	}
	divisao(valorA,valorB)
	{
		return valorA / valorB;
	}
}

let instanciamatematica = new Matematica();

let resultado = instanciamatematica.soma(4,7);
// let resultado = instanciamatematica.subtracao(4,7);
// let resultado = instanciamatematica.multiplicacao(4,7);
// let resultado = instanciamatematica.divisao(4,7);

console.log(resultado);



