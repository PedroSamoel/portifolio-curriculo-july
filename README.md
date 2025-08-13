# My Portifolio

## Testes Automatizados com Cypress

Este projeto utiliza o Cypress para realizar testes automatizados end-to-end na plataforma [Automation Practice](http://www.automationpractice.pl/index.php).  
A arquitetura segue o padrão **Page Object Model (POM)** para manter o código limpo, reutilizável e organizado.

### Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

### Pré-requisitos

- Node.js instalado  
- Navegador (Chrome, Firefox, Edge, etc)

### Como executar os testes

Executar os testes com interface gráfica:

```bash
npx cypress open
```

Executar os testes diretamente no terminal:

```bash
npx cypress run
```

### Estrutura do Projeto

```
cypress/
├── e2e/
│   └── userexperience.spec.cy.js
├── fixtures/
│   └── userData.json
├── pages/
│   ├── loginPage.js
│   └── accountManagementPage.js
├── support/
│   ├── commands.js
│   └── e2e.js
```

### Organização dos Testes

- **Login:**
  - Login mal-sucedido (sem preenchimento / dados inválidos)
  - Login bem-sucedido
  - Logout

- **Gerenciamento de Conta:**
  - Edição de informações pessoais
  - Verificação de notificação de sucesso

### Padrões e Boas Práticas

- Uso de **Page Object Model** para encapsular seletores e ações
- Separação de dados sensíveis e de teste no arquivo `fixtures/userData.json`
- Testes divididos por contexto com `describe` e organizados por responsabilidade

### Licença

Este projeto é de uso pessoal com fins educacionais.