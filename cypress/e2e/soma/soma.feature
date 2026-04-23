Feature: Calculator

Scenario: soma
    Given estou dentro do sistema Calculator
    When digitar o numero 5 na primeira caixa
    And digitar 10 na segunda caixa
    And clicar no botão Calcular
    Then deve mostrar que o resultado é 15