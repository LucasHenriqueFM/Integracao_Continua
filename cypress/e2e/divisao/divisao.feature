Feature: Dividir

Scenario: divisão
    Given estou dentro do sistema Calculator
    When digitar o numero 10 na primeira caixa
    Then alterar plus para divide
    And digitar 2 na segunda caixa
    And clicar no botão Calcular
    Then deve mostrar que o resultado é 5