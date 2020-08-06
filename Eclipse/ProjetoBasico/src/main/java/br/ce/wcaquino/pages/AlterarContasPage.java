package br.ce.wcaquino.pages;

import org.openqa.selenium.By;

import br.ce.wcaquino.core.BasePage;

public class AlterarContasPage extends BasePage{
		
	public void editarConta() {
		super.clicarBotao(By.xpath("/html/body/table/tbody/tr[2]/td[2]/a[1]/span"));
	}
	
	public String obterMensagemSucesso() {
		return super.obterTexto(By.xpath("/html/body/div[1]"));
	}

}
