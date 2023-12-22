"use strict"

const { By } = require('selenium-webdriver');

module.exports = class LoginPage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    async navigateToPage() {
        await this.#driver.get('http://shop.qa.rs');
    }

    getInputUsername() {
        return this.#driver.findElement(By.name('username'));
    }

    getInputPassword() {
        return this.#driver.findElement(By.name('password'));
    }

    getButtonLogin() {
        return this.#driver.findElement(By.name('login'));
    }

    fillInputUsername(text) {
        this.getInputUsername().sendKeys(text);
    }

    fillInputPassword(text) {
        this.getInputPassword().sendKeys(text);
    }

    async clickButtonLogin() {
        await this.getButtonLogin().click();
    }
}


























