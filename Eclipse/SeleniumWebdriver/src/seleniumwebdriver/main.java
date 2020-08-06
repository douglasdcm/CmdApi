/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package seleniumwebdriver;

/**
 *
 * @author Douglas
 */
public class main {
    public static void main (String[ ] args){
        ScriptCadastroDeVagas cadastro = new ScriptCadastroDeVagas();
        cadastro.setUp("https://www.vagas.com.br//");
        cadastro.testScriptCadastroDeVagas("//empregos//andreani");
    }
    
}
