let achou = false;

let numerosorteado = 10;

// let repetições = 10;

let possivelvalor = 0;

while(!achou)
{
	//possivelvalor = possivelvalor + 1
	possivelvalor += 1;
	if(numerosorteado === possivelvalor)
	{
		acho = true;
	}
	else
	{
		console.log("possivel valor não corresponde ao numero sorteado" + possivelvalor);
	}
}