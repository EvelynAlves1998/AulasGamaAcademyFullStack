/* O operador == compara por "resultado"
O operador === ele compara o valor e o tipo, 
então só vai ser true se for exatamente igual (valor e tipo). */
let nome = "alves";

if(nome === "evelyn")
{
	console.log("Legal seu nome é este mesmo!");
}
else if(nome === "alves")
{
	console.log("tudo bem, este tbm serve!");
}
else
{
	console.log("Que pena seu nome não é Evelyn! :/");
}

let nome = "Evelyn";

switch(nome)
{
	case 'Evelyn':
		console.log("Legal! Vc é a Evelyn Mesmo!");
		break;
	case 'Alves':
		console.log("tudo bem, este tbm serve!");
		break;
	default:
		console.log("Que pena! Vc não é quem eu estou procurando!");
		break;
}