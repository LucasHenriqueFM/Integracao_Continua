import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given('estou dentro do sistema Calculator', () => {
  cy.visit('https://testpages.herokuapp.com/calculate.php');
});