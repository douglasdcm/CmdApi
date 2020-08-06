package br.ce.wcaquino.pages;

import org.openqa.selenium.By;

import br.ce.wcaquino.core.BasePage;

public class InserirContasPage extends BasePage{

	public void setNome(String nome) {
		super.escrever("nome", nome);
	}
	
	public void salvar() {
		super.clicarBotao(By.xpath(".//*[.='Salvar']"));
	}
	
	public String obterMensagemSucesso() {
		return super.obterTexto(By.xpath("/html/body/div[1]"));
		//Conta adicionada com sucesso!
	}
	
}
