package br.ce.wcaquino.tests;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import br.ce.wcaquino.core.BasePage;
import br.ce.wcaquino.core.BaseTest;
import br.ce.wcaquino.core.DriverFactory;
import br.ce.wcaquino.pages.AlterarContasPage;
import br.ce.wcaquino.pages.InserirContasPage;
import br.ce.wcaquino.pages.MenuPage;

public class ContaTeste extends BaseTest{

	private InserirContasPage inserirContasPage = new InserirContasPage();
	private MenuPage menuPage = new MenuPage();
	private AlterarContasPage alterarContasPage = new AlterarContasPage();
		
	
//	@Test
//	public void inseirConta() {//testa o login
//		
//	}
	
	@Test
	public void testeInserirConta() {
		menuPage.acessarTelaInserirContas();
		inserirContasPage.setNome("Conta do teste");
		inserirContasPage.salvar();
		
		Assert.assertEquals("Conta adicionada com sucesso!", inserirContasPage.obterMensagemSucesso());
	}
	
	@Test
	public void testeAlterarConta() {
		menuPage.acessarTelaAlterarContas();
		alterarContasPage.editarConta();
		
		inserirContasPage.setNome("Conta alterarda");
		inserirContasPage.salvar();
		
		Assert.assertEquals("Conta alterada com sucesso!", alterarContasPage.obterMensagemSucesso());
	}
	
}
