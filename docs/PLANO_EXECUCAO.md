# Plano de execução

## Objetivo

Entregar uma aplicação pequena, funcional e apresentável que evidencie, no mesmo repositório, o aprendizado acumulado das semanas 2, 3 e 4: Git/GitHub, CI/CD e Docker.

## Fases

1. **Fundação Git**
   - iniciar o repositório com `main`;
   - desenvolver em `feature/task-planner`;
   - produzir pelo menos cinco commits claros;
   - deixar o branch pronto para uma pull request.
2. **Aplicação**
   - implementar o organizador pessoal Ritmo com React e Vite;
   - persistir tarefas no navegador;
   - oferecer criação, edição, conclusão, filtros e exclusão;
   - garantir acessibilidade e responsividade.
3. **Qualidade**
   - separar regras de domínio da interface;
   - criar testes automatizados;
   - executar build de produção.
4. **CI/CD**
   - validar testes e build em commits e pull requests;
   - construir o container no workflow de entrega;
   - publicar a imagem no GHCR após integração em `main`.
5. **Docker**
   - usar build multi-stage;
   - servir os arquivos estáticos com Nginx;
   - incluir healthcheck e configuração de SPA.
6. **Verificação e entrega**
   - testar o fluxo principal no navegador;
   - testar layout desktop e mobile;
   - executar o container quando Docker estiver disponível;
   - seguir o roteiro de screenshots.

## Critérios de conclusão

- aplicação funcional e persistente;
- testes e build aprovados;
- workflows de CI e CD válidos;
- Dockerfile presente no branch da PR e, após o merge, em `main`;
- documentação suficiente para reprodução;
- histórico com branches e pelo menos cinco commits;
- checklist de ações humanas claramente separado.
