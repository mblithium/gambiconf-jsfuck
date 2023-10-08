# Gambiconf - JSFu#$

Desenvolvido para apresentar uma gambiarra com jsfu#$ na [Gambiconf](https://gambiconf.dev/), este projeto converte um código escrito com javascript normal em "jsfuck" (uma forma de escrever javacript válido com apenas 6 caracteres), o html tem apenas uma importação do script já convertido e no site há um botão para o usuário ver o código que está sendo lido pelo interpretador javascript da página. É utilizado nodejs e a biblioteca "jscrewit" para conversão.

Você pode aprender mais sobre o funcionamento no [README do projeto do aemkei](https://github.com/aemkei/jsfuck/blob/main/README.md) (Em inglês).

# Como usar

## Clone o repositório em sua máquina

Clone o projeto e entre no diretório.

```bash
git clone https://github.com/mblithium/gambiconf-jsfuck.git && cd gambiconf-jsfuck
```

## Baixe as dependências

Utilize preferencialmente o yarn, mas funciona com NPM.

```bash
yarn
```

## Converta o sourcecode para jsfuck

```bash
yarn convert
```

O projeto está na raiz, apenas abra o arquivo "index.html" para ver o resultado.

# Estrutura 

- **/scripts**: Aqui ficará o arquivo já convertido.
- **/source**: O arquivo de código fonte contendo o javascript normal.
- **/tests**: Se quiser testar algumas conversões e coersões.
- **index.html**: Página inicial que só precisa de um link para o script já convertido para funcionar.
