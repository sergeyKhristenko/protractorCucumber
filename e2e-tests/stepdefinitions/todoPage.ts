import { browser, $, protractor, $$ } from 'protractor';

const { Given, When, Then } = require('cucumber');
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given(/^I am on TODO home page$/, async () => {
  expect(await browser.getTitle()).to.equal('TodoApp');
});

When(/^I type in todoInput "(.*?)"$/, async text => {
  const todoInput = $('.new-todo');

  await todoInput.clear();
  await todoInput.sendKeys(text);
});

Then(/^I hit Enter$/, async () => {
  await browser
    .actions()
    .sendKeys(protractor.Key.ENTER)
    .perform();
});


Then(/^"(.*?)" appears in the todoList$/, async (todoName) => {
  const todoList = $$('.todo-list');
  const todos = await todoList.getText();

  expect(todos[0]).to.contain(todoName);
});
