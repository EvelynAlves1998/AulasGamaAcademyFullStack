let lista = [1,2,5];
let listaincluir = [3, 4];

console.log(lista);
console.log(listaincluir);


for(let i = 0; i < listaincluir.length; i++)
{
	for(let j = 0; j < lista.length; j++)
	{
		if(lista[j] >= listaincluir[i])
		{
			lista.splice(j, 0, listaincluir[i]);
			j++;
		}
	}
}

console.log(lista);

//----------------
const listresult = [1, 2,...listaincluir,5];

console.log(listresult);

//----------------
let arr = ['a', 'b', 'c'];

let arr2 = [...arr];

arr2.push('d');

console.log(`arr = ${arr}`);
console.log(` arr2 = ${arr2}`);
