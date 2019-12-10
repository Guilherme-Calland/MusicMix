import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let samePassword = ((elem, password) => elem.element(by.name('passwordlist')).getText().then(text => text === password));
let sameUserName = ((elem, username) => elem.element(by.name('namelist')).getText().then(text => text === username));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the login page$/, async () => {
        await browser.get("http://localhost:4200/login");
        await expect(browser.getTitle()).to.eventually.equal('MusicMix');
    })

    // Given(/^I cannot see a student with CPF "(\d*)" in the students list$/, async (cpf) => {
    //     var allcpfs : ElementArrayFinder = element.all(by.name('cpflist'));
    //     await allcpfs;
    //     var samecpfs = allcpfs.filter(elem =>
    //                                   elem.getText().then(text => text === cpf));
    //     await samecpfs;
    //     await samecpfs.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    // });

    When(/^I try to register the musician with username "([^\"]*)" and password "(\d*)"$/, async (username, password) => {
        await $("input[name='username']").sendKeys(<string> username);
        await $("input[name='password']").sendKeys(<string> password);
        await element(by.buttonText('Cadastrar')).click();
    });

    // Then(/^I can see "([^\"]*)" with CPF "(\d*)" in the students list$/, async (name, cpf) => {
    //     var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
    //     allalunos.filter(elem => pAND(samePassword(elem,cpf),sameUserName(elem,name))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    // });

    Then(/^I can see the profile page$/, async () => {
        await browser.get("http://localhost:4200/profile");
        await expect(browser.getTitle()).to.eventually.equal('MusicMix');
    });
})
