function verificarFibonacci() {
	const numero = parseInt(document.getElementById("numeroFibonacci").value);
	let fibonacci = [0, 1];
	let pertenceSequencia = false;

	while (fibonacci[fibonacci.length - 1] < numero) {
		fibonacci.push(
			fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2],
		);
	}

	if (fibonacci.includes(numero)) {
		pertenceSequencia = true;
	}

	document.getElementById("resultadoFibonacci").textContent = pertenceSequencia
		? `O número ${numero} pertence à sequência de Fibonacci.`
		: `O número ${numero} não pertence à sequência de Fibonacci.`;
}

const dadosFaturamento = {
	dia1: 22174.1664,
	dia2: 24537.6698,
	dia3: 26139.6134,
	dia4: 0.0,
	dia5: 0.0,
	dia6: 26742.6612,
	dia7: 0.0,
	dia8: 42889.2258,
	dia9: 46251.174,
	dia10: 11191.4722,
	dia11: 0.0,
	dia12: 0.0,
	dia13: 3847.4823,
	dia14: 373.7838,
	dia15: 2659.7563,
	dia16: 48924.2448,
	dia17: 18419.2613,
	dia18: 0.0,
	dia19: 0.0,
	dia20: 35240.1826,
	dia21: 43826.1848,
	dia22: 18230.8822,
	dia23: 4355.0662,
	dia24: 13327.1025,
	dia25: 0.0,
	dia26: 0.0,
	dia27: 25681.8318,
	dia28: 1718.1221,
	dia29: 13220.495,
	dia30: 8414.61,
};

function calcularFaturamento() {
	let menorFaturamento = Infinity;
	let maiorFaturamento = 0;
	let somaFaturamento = 0;
	let diasComFaturamento = 0;

	for (const dia in dadosFaturamento) {
		const faturamentoDia = dadosFaturamento[dia];

		if (faturamentoDia > 0) {
			menorFaturamento = Math.min(menorFaturamento, faturamentoDia);
			maiorFaturamento = Math.max(maiorFaturamento, faturamentoDia);
			somaFaturamento += faturamentoDia;
			diasComFaturamento++;
		}
	}

	const mediaMensal = somaFaturamento / diasComFaturamento;
	let diasAcimaDaMedia = 0;

	for (const dia in dadosFaturamento) {
		const faturamentoDia = dadosFaturamento[dia];

		if (faturamentoDia > mediaMensal) {
			diasAcimaDaMedia++;
		}
	}

	document.getElementById("resultadoFaturamento").innerHTML = `
        <p>Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}</p>
        <p>Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}</p>
        <p>Número de dias com faturamento acima da média: ${diasAcimaDaMedia}</p>
    `;
}

calcularFaturamento();

const faturamentoEstados = {
	SP: 67836.43,
	RJ: 36678.66,
	MG: 29229.88,
	ES: 27165.48,
	Outros: 19849.53,
};

function calcularPercentuais() {
	let totalFaturamento = 0;

	for (const estado in faturamentoEstados) {
		totalFaturamento += faturamentoEstados[estado];
	}

	const tabelaPercentuais = document.getElementById("percentuaisEstados");

	for (const estado in faturamentoEstados) {
		const percentual = (faturamentoEstados[estado] / totalFaturamento) * 100;
		const linha = tabelaPercentuais.insertRow();
		const celulaEstado = linha.insertCell();
		const celulaPercentual = linha.insertCell();
		celulaEstado.textContent = estado;
		celulaPercentual.textContent = `${percentual.toFixed(2)}%`;
	}
}

calcularPercentuais();

function invertStg() {
	const stringOriginal = document.getElementById("inverterString").value;
	let stringInvertida = "";

	for (let i = stringOriginal.length - 1; i >= 0; i--) {
		stringInvertida += stringOriginal[i];
	}
	document.getElementById("stringInvertida").textContent = stringInvertida;
}
