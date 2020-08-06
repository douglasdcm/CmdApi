# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.

require "selenium-webdriver"
driver = Selenium::WebDriver.for :firefox
driver.navigate.to "http://www.google.com"
