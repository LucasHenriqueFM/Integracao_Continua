import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given('estou dentro do sistema Calculator', () => {
  cy.visit('https://testpages.herokuapp.com/calculate.php');
});

When('digitar o numero 10 na primeira caixa', () =>{
  cy.get('#number1').type('10')
});

Then('alterar plus para divide', () =>{
  cy.get('#function').select('divide');
});

And('digitar 2 na segunda caixa', () =>{
  cy.get('#number2').type('2')
});

And('clicar no botão Calcular', () =>{
  cy.get('#calculate').click()
});

Then('deve mostrar que o resultado é 5', () => {
  cy.get('#answer').should('have.text', '5')
})