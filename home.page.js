"use strict"
const { By, until } = require('selenium-webdriver');

module.exports = class HomePage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    async navigateToPage() {
       await this.#driver.get('http://shop.qa.rs');
    }

    getPageTitle() {
        return this.#driver.getTitle();
    }

    getPageHeaderTitle() {
        return this.#driver.findElement(By.tagName('h1')).getText();
    }

    getWelcomeBackTitle() {
        return this.#driver.findElement(By.tagName('h2')).getText();
    }

    isProductListDisplayed() {
        return this.#driver.findElement(
            By.xpath('//div[@class="row" and contains(.,"ORDER YOUR BUGS TODAY")]')).isDisplayed();
    }

    async clickOnRegisterLink() {
        const registerLink = await this.#driver.findElement(By.linkText("Register"));
        await registerLink.click();
    }

    getSuccessAlert() {
        return this.#driver.wait(until.elementLocated(By.className('alert alert-success')), 1000);
    }

    getSuccessAlertText() {
        return this.getSuccessAlert().getText();
    }

}