# Atividade Somativa 2

## Objetivo

Comprovar a execução automatizada de testes unitários em uma pull request e o
envio de alertas a partir do GitHub Actions.

## Testes

O projeto possui os testes originais em `tests/tasks.test.js` e os novos casos
da Somativa 2 em `tests/tasks.edge-cases.test.js`. O script `npm test` executa
todos os arquivos `tests/*.test.js`.

O workflow `Continuous Integration` é acionado em pull requests direcionadas à
branch `main`. Cada novo commit enviado para a branch da PR dispara uma nova
execução dos testes e do build.

## Alertas

O workflow `.github/workflows/alerts.yml` oferece dois caminhos:

- envia automaticamente um alerta quando o workflow `Continuous Integration`
  termina com falha;
- permite enviar um alerta controlado pela opção `Run workflow`, sem quebrar o
  projeto apenas para produzir a evidência acadêmica.

### Configuração exclusiva do aluno

1. No Discord, abra as configurações do canal, entre em **Integrações** e crie
   um webhook.
2. No GitHub, acesse **Settings > Secrets and variables > Actions**.
3. Crie um repository secret chamado `DISCORD_WEBHOOK_URL` com a URL completa
   do webhook.
4. Depois que este workflow estiver na `main`, abra **Actions > Monitoring
   Alerts > Run workflow** e confirme a execução.
5. Capture o workflow exibido no GitHub e a mensagem recebida no Discord.

Nunca publique a URL do webhook em commits, prints ou campos de resposta.

## Evidências da entrega

Como a Somativa 1 já foi entregue, não é necessário repetir a evidência
condicional da atividade formativa da semana 2.

- screenshot do arquivo `.github/workflows/alerts.yml`;
- screenshot da mensagem de teste recebida no Discord;
- screenshot ou arquivo contendo o código dos testes unitários;
- screenshot dos testes executados com sucesso dentro da nova PR.
