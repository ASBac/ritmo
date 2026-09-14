# Roteiro da entrega somativa

## Evidências exigidas pelo material

A entrega final deve conter pelo menos quatro imagens:

1. screenshot do repositório público mostrando URL, usuário, nome e conteúdo;
2. screenshot da pull request com os workflows de CI e CD concluídos com sucesso;
3. screenshot do container funcionando localmente, preferencialmente incluindo `docker ps`;
4. screenshot do `Dockerfile` no repositório, ou o próprio arquivo `Dockerfile` anexado.

## Validações adicionais

- screenshots sem URL visível podem ser recusados;
- apenas o link do repositório, sem screenshots, pode ser recusado;
- o nome de usuário do GitHub deve permitir associação ao aluno;
- depois do merge, o `Dockerfile` precisa estar em `main`;
- o link pode acompanhar as imagens, mas não substituí-las.

## **AÇÕES EXCLUSIVAS DO ALUNO**

- **Criar um repositório público vazio em sua conta pessoal do GitHub.**
- **Vincular este repositório local ao remoto e enviar `main` e `feature/task-planner`.**
- **Abrir a pull request de `feature/task-planner` para `main`, aguardar CI e CD ficarem verdes e fazer o merge.**
- **Manter a URL do navegador visível ao capturar as evidências do GitHub.**
- **Instalar/iniciar o Docker Desktop, caso ele ainda não esteja disponível no computador.**
- **Executar o container e capturar a aplicação junto de uma evidência de `docker ps`.**
- **Reunir as quatro imagens, conferir sua legibilidade e fazer o envio no AVA.**

Não é necessário criar token para o GHCR: o workflow usa o `GITHUB_TOKEN` fornecido automaticamente pelo GitHub Actions.
