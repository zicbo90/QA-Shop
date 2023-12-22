"use strict"

const { By } = require('selenium-webdriver');

module.exports = class RegisterPage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    async navigateToPage() {
        await this.#driver.get('http://shop.qa.rs/register');
    }

    getCurrentUrl() {
        return this.#driver.getCurrentUrl();
    }

    getRegisterButton() {
        return this.#driver.findElement(By.name('register'));
    }

    getRegistrationButtonValue() {
        return this.getRegisterButton().getAttribute('value');
    }

    getInputFirstName() {
        return this.#driver.findElement(By.name('ime'));
    }

    getInputLastName() {
        return this.#driver.findElement(By.name('prezime'));
    }

    getInputEmail() {
        return this.#driver.findElement(By.name('email'));
    }

    getInputUsername() {
        return this.#driver.findElement(By.name('korisnicko'));
    }

    getInputPassword() {
        return this.#driver.findElement(By.name('lozinka'));
    }

    getInputPasswordConfirm() {
        return this.#driver.findElement(By.name('lozinkaOpet'));
    }

    fillInputFirstName(text) {
        this.getInputFirstName().sendKeys(text);
    }

    fillInputLastName(text) {
        this.getInputLastName().sendKeys(text);
    }

    fillInputEmail(text) {
        this.getInputEmail().sendKeys(text);
    }

    fillInputUsername(text) {
        this.getInputUsername().sendKeys(text);
    }

    fillInputPassword(text) {
        this.getInputPassword().sendKeys(text);
    }

    fillInputPasswordConfirm(text) {
        this.getInputPasswordConfirm().sendKeys(text);
    }

    clickOnRegisterButton() {
        this.getRegisterButton().click();
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}