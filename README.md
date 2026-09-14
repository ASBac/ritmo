# Ritmo

Aplicação de produtividade pessoal criada para demonstrar um fluxo completo de Git, integração contínua, entrega contínua e Docker.

O Ritmo permite criar, editar, concluir, filtrar e excluir tarefas. Os dados ficam salvos no próprio navegador.

## Objetivos do projeto

- manter um histórico Git organizado em branches e commits pequenos;
- validar o código automaticamente com GitHub Actions;
- gerar uma aplicação estática de produção;
- executar a aplicação em um container Docker;
- publicar opcionalmente a imagem no GitHub Container Registry após o merge em `main`.

## Documentação

- [Plano de execução](docs/PLANO_EXECUCAO.md)
- [Sistema visual](docs/DESIGN_SYSTEM.md)
- [Roteiro da entrega](docs/ENTREGA.md)

## Estado atual

O branch `main` contém o alicerce documental. A implementação completa é desenvolvida no branch `feature/task-planner`, preparado para ser enviado ao GitHub e integrado por pull request.
