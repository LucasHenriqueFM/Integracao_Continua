import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';


Given('estou dentro do sistema Calculator', () => {
  cy.visit('https://testpages.herokuapp.com/calculate.php');
});

When('digitar o numero 4 na primeira caixa', () =>{
  cy.get('#number1').type('4')
});

Then('alterar plus para times', () =>{
  cy.get('#function').click()
});

// And('digitar 6 na segunda caixa', () =>{
//   cy.get('#number2').type('6')
// });

// And('clicar no botão Calcular', () =>{
//   cy.get('#calculate').click()
// });

// Then('deve mostrar que o resultado é 10', () => {
//   cy.get('#answer').should('have.text', '10')
// })