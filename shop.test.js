"use strict"

require('chromedriver');
const webdriver = require('selenium-webdriver');
const { assert, expect} = require('chai');
const HomePage = require("../pages/home.page");
const RegisterPage = require("../pages/register.page");
const LoginPage = require("../pages/login.page");

describe('shop.qa.rs tests', () => {
    let driver;
    let pageHomepage;
    let pageRegister;
    let pageLogin;

    before(() => {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        pageHomepage = new HomePage(driver);
        pageRegister = new RegisterPage(driver);
        pageLogin = new LoginPage(driver);
    });

    after(async () => {
        await driver.quit();
    });

    it('Verifies homepage is open', async function () {
        await pageHomepage.navigateToPage();
        const pageTitle = await pageHomepage.getPageTitle();
        expect(pageTitle).to.contain('QA Shop');
        assert.equal(pageTitle, 'QA Shop');
        const pageHeaderTitle = await pageHomepage.getPageHeaderTitle();
        expect(pageHeaderTitle).to.contain('(QA) Shop');
        expect(await pageHomepage.isProductListDisplayed()).to.be.true;
    });

    it('Goes to registration page', async () => {
        await pageHomepage.clickOnRegisterLink();
        expect(await pageRegister.getCurrentUrl()).to.be.eq('http://shop.qa.rs/register');
        expect(await pageRegister.getRegistrationButtonValue()).to.be.eq('Register');
    });

    it('Successfully performs registration', async () => {
       const ime = 'Bob';
       const prezime = 'Buttons';
       const randomNumber = pageRegister.random(10000, 100000000);
       const korisnicko = 'bob.buttons.' + randomNumber;

        await pageRegister.fillInputFirstName(ime);
        await pageRegister.fillInputLastName(prezime);
        await pageRegister.fillInputEmail('bob.buttons@example.local');
        await pageRegister.fillInputUsername(korisnicko);
        await pageRegister.fillInputPassword('nekaLozinka1234!');
        await pageRegister.fillInputPasswordConfirm('nekaLozinka1234!');
        await pageRegister.clickOnRegisterButton();

        const successAlertText = await pageHomepage.getSuccessAlertText();

        expect(successAlertText).to.contain('Uspeh!');
        expect(successAlertText).to.contain(ime);
        expect(successAlertText).to.contain(prezime);
    });

    it('Goes to login page and performs login', async () => {
        await pageLogin.navigateToPage();

        await pageLogin.fillInputUsername('bob.buttons-1');
        await pageLogin.fillInputPassword('nekaLozinka1234!');
        await pageLogin.clickButtonLogin();

        expect(await pageHomepage.getWelcomeBackTitle()).to.contain('Welcome back');

    });


});






















