Feature: Multiplicar

Scenario: multiplicação
    Given estou dentro do sistema Calculator
    When digitar o numero 4 na primeira caixa
    Then alterar plus para times
    And digitar 6 na segunda caixa
    And clicar no botão Calcular
    Then deve mostrar que o resultado é 24
