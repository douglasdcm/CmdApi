require_relative "Teste.rb"
require_relative "Object_Repository"

require "rubygems"
require "selenium-webdriver"

driver = Selenium::WebDriver.for :chrome

driver.get "http://google.com"

o = Object_Repository::Google::Tela_Principal.new
o.caixa_busca(driver).send_keys "Cheese!"


#element = driver.find_element :name => "q"
#element.send_keys "Cheese!"
#element.submit

sleep 5

