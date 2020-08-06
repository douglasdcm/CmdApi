package br.ce.wcaquino.pages;

import br.ce.wcaquino.core.BasePage;

public class MenuPage extends BasePage {

	public void acessarTelaInserirContas() {
		super.clicarLink("Contas");
		super.clicarLink("Adicionar");
	}
	
	public void acessarTelaAlterarContas() {
		super.clicarLink("Contas");
		super.clicarLink("Listar");
	}
	
}
