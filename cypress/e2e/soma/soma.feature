Feature: Calculator

Scenario: soma
    Given estou dentro do sistema Calculator
    When digitar o numero 4 na primeira caixa
    And digitar 6 na segunda caixa
    And clicar no botão Calcular
    Then deve mostrar que o resultado é 10