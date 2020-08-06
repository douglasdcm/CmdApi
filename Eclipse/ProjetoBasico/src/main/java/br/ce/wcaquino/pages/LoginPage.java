package br.ce.wcaquino.pages;

import org.openqa.selenium.By;

import br.ce.wcaquino.core.BasePage;
import br.ce.wcaquino.core.DriverFactory;

public class LoginPage extends BasePage {

	public void acesarTelaInicial() {
		DriverFactory.getDriver().get("https://seubarriga.wcaquino.me");
	}
	
	public void setEmail(String email) {
		super.escrever("email", email);
	}
	
	public void setSenha(String senha) {
		super.escrever("senha", senha);
	}
	
	public void entrar() {
		super.clicarBotao(By.xpath("//button[.='Entrar']"));
	}
}
