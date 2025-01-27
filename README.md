## Integração Contínua com GitHub Actions

### 1. Criar um Pull Request
- Acesse o repositório no GitHub
- Clique em **Compare & Pull Request**
- Descreva as alterações

### 2. Configuração do Workflow
- Arquivo de workflow: `.github/workflows/[nome-do-arquivo].yml`
- Instalar dependências
- Executar testes automatizados

### 3. Comandos para Subir a Nova Versão para o Git
- Criar uma nova branch
- Commit e push da nova branch
- Comandos:
  ```bash
  git checkout -b nome-da-branch
  git add .
  git commit -m "Descrição"
  git push origin nome-da-branch