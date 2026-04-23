import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given('estou dentro do sistema Calculator', () => {
  cy.visit('https://www.calculator.net/');
});

When('digitar o numero 10 da calculadora', () =>{
  cy.get('r(1)').click()
  cy.get('r(0)').click()
});

// Then('alterar plus para divide', () =>{
//   cy.get('#function').select('divide');
// });

// And('digitar 2 na segunda caixa', () =>{
//   cy.get('#number2').type('2')
// });

// And('clicar no botão Calcular', () =>{
//   cy.get('#calculate').click()
// });

// Then('deve mostrar que o resultado é 5', () => {
//   cy.get('#answer').should('have.text', '5')
// })