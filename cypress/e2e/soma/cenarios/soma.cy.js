import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';


Given('estou dentro do sistema Calculator', () => {
  cy.visit('https://testpages.herokuapp.com/calculate.php');
});

When('digitar o numero 5 na primeira caixa', () =>{
  cy.get('#number1').type('5')
});

And('digitar 11 na segunda caixa', () =>{
  cy.get('#number2').type('11')
});

And('clicar no botão Calcular', () =>{
  cy.get('#calculate').click()
});

Then('deve mostrar que o resultado é 16', () => {
  cy.get('#answer').should('have.text', '16')
})