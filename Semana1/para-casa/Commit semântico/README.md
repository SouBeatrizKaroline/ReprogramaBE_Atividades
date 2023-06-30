# Exercício de Casa 🏠 

## Commit Semântico

> [Link do texto de base](https://blog.geekhunter.com.br/o-que-e-commit-e-como-usar-commits-semanticos/)

### Resumo

Quando fazemos um Commit estamos adicionando alterações a revisão principal daquele repositorio, comumente chamado de Master. Mas respeitar uma certa semântica ao fazer um Commit, pode ser util de diversas formas.

A importancia do Commit Semântico são diversas, entre elas:

1. Melhor controle de versões;

2. Indentificação da alteração feita, com maior rapidez;

3. Ganho de produtividade em equipes

4. Entre outras


Para fazer um Commit, existe alguns comandos que são uteis, como:

1. git commit -m 'mensagem do commit'

2. git add .

3. git push

4. git commit -a -m 'commit message'

5. Entre alguns outros

A estrutura básica de um Commit Semântico comumente é:

<tipo>[escopo opcional]: <descrição>
<corpo opcional>
<rodapé opcional>

Sendo:

- Tipo e descrição, as partes obrigatorias
- E escopo, corpo e rodapé, partes opcionais

Os tipos de Commit Semântico, vale destacar:

1. build: Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm),

2. ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs);

3. docs: referem-se a inclusão ou alteração somente de arquivos de documentação;

4. feat: Tratam adições de novas funcionalidades ou de quaisquer outras novas implantações ao código;

5. fix: Essencialmente definem o tratamento de correções de bugs;

6. perf: Uma alteração de código que melhora o desempenho;

7. refactor: Tipo utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada;

8. style: Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc;

9. test: Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD);

10. chore: Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas que realmente não entram em produção;

11. env: basicamente utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.


Exemplos das demais partes

- Escopo
feat(login/routes): change in route settings for the login

- Descrição
test: ensure DbLoadSurveys throws if LoadSurveysRepository throws

- Corpo
feat: ensure LoadSurveysController returns 204 if there is no content
- Returns code 204 if the search load method does not return content

- Rodapé:
fix: correct minor typos in code
see the issue for details
on typos fixed.
Reviewed-by: Elisandro Mello
Refs #133
