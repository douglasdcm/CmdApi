describe("Suite de teste de adição", function(){
	const CalcController = require('../../scripts/controller/CalcController.js');
	let calculadora = new CalcController();

	it("deve retornar 5 para 2 e 3", function(){
		expect(calculadora.adicionar(2,3)).toEqual(5);
		//expect(Calculadora).toBe(Calculadora);
	});

	it("deve retornar 6 para 9 e -3", function(){
		expect(calculadora.adicionar('9', '-3')).toEqual(6);
	});

	it("deve retornar 4.5 para 1.5 e 3", function(){
		expect(calculadora.adicionar(1.5, 3)).toEqual(4.5);
	});

	it("deve retornar 0 para quando primeiro numero for undefined", function(){
		expect(calculadora.adicionar(undefined, 3)).toEqual(0);
	});

	it("deve retornar 0 para quando segundo numero for undefined", function(){
		expect(calculadora.adicionar(3, undefined)).toEqual(0);
	});
	
});