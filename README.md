# 1. Introdução

## 1.1 O que é JavaScript?

JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web, toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática, mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. É a terceira camada do bolo das tecnologias padrões da web, duas das quais (HTML e CSS).

## 1.2 Para que ele serve?

JavaScript serve para deixar as páginas da web mais interativas e dinâmicas. Com ele é possível responder ações do usuário, como cliques e digitação, alterar conteúdos da página, validar formulários e criar efeitos e animações.

## 1.3 Como ele complementa HTML e CSS?

Ele adiciona movimento às páginas web, além de permitir o processamento e transformação de dados enviados e recebidos. Ele permite criar conteúdos que se atualizam de forma dinâmica e animada, dando vida às aplicações que antes eram apenas estruturadas com HTML de forma estática.

---

# 2. Formas de uso no HTML

JavaScript pode ser utilizado de duas formas principais.

## 2.1 Script dentro do HTML

O código JavaScript pode ser escrito dentro da própria página usando a tag `<script>`.

Exemplo:

<!DOCTYPE html>
<html>
<head>
<title>Exemplo Script Interno</title>
</head>

<body>

<button onclick="mostrarMensagem()">Clique aqui</button>

<script>

function mostrarMensagem(){
    alert("Olá! Este JavaScript está dentro do HTML.");
}

</script>

</body>
</html>


# 3. Variáveis, tipos e escopo

## 3.1 O que é uma variável?

As variáveis são estruturas importantes em qualquer programação, independentemente da linguagem que se utilize para implementar os códigos ou programas. Elas podem ser entendidas como uma caixinha, onde os dados são armazenados temporariamente ou em definitivo e que são manipuladas durante a execução do programa.

## 3.2 Como declarar variável em JavaScript?

Você pode declarar uma variável de três formas:

- Com a palavra chave var. Por exemplo, var x = 42. Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais.

- Por simples adição de valor. Por exemplo, x = 42. Isso declara uma variável global. Essa declaração gera um aviso de advertência no JavaScript. Você não deve usar essa variante.

- Com a palavra chave let. Por exemplo, let y = 13. Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco.

## 3.3 Diferença entre var, let e const

*var*
Declara uma variável, opcionalmente, inicializando-a com um valor.

*let*
Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

*const*
Declara uma constante de escopo de bloco, apenas de leitura.

## 3.4 O que é escopo global?

Em JavaScript, o escopo global é o escopo mais amplo disponível. Variáveis ​​declaradas no escopo global são acessíveis de qualquer lugar no seu código, seja dentro de funções, instruções condicionais, loops ou outros blocos de código.

Tudo o que você declara no escopo global é como colocar um outdoor na praça, visível para todos. Qualquer função ou bloco de código dentro do seu programa pode ler e modificar essas variáveis ​​globais.

## 3.5 O que é escopo de função?

No escopo de função, as variáveis declaradas dentro da função, somente serão acessadas por dentro da função, não sendo possível acessa-las do lado de fora.

No escopo de função, esse comportamento acontece independente da palavra chave usada na criação da variável ou constante, var, let ou const.

## 3.6 O que é escopo de bloco?

Em JavaScript, o escopo de bloco é como uma série de caixas aninhadas dentro de um contêiner maior, cada uma com seu próprio conjunto de variáveis.

Ao contrário dos escopos global e local, que são definidos por funções ou contexto global, o escopo de bloco é criado dentro de blocos de código específicos, como instruções condicionais (if, else, switch) e loops (for, while).

As variáveis ​​declaradas no escopo de bloco ficam confinadas a esse bloco, oferecendo um alto grau de isolamento.

# 4. Operadores, comparações e lógica

## 4.1 Operadores aritméticos principais



## 4.2 Operadores relacionais principais

Assim como os de igualdade, avaliam dois operandos. Neste caso, mais precisamente, definem se o operando à esquerda é menor, menor ou igual, maior ou maior ou igual ao da direita, retornando um valor booleano. Esse código realiza uma série de comparações entre duas variáveis para determinar o que será impresso no console. Uma vez que o valor da variável valorA é menor que valorB serão impressas as mensagens “menor” e “menor ou igual”.

## 4.3 Operadores lógicos principais

&& - Utilizado quando desejamos que as duas expressões sejam verdadeiras.
|| - Utilizado quando precisamos que pelo menos uma das expressões seja verdadeira.

## 4.4 Diferença entre == e ===

== (Igual a ou Equal to) – é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.

*5 == "5" → Resultado: true*

Por quê? Faz a "coerção de tipo", transformando a string em número para ver se os valores batem.

-------

=== (Valor e Tipo igual) – é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.

*5 === "5" → Resultado: false*

Por quê? Aqui não há conversão. Como um é Number e o outro é String, eles são considerados diferentes logo de cara.

## 4.5 Diferença entre != e !==

!= Retorna verdadeiro caso os operandos não sejam iguais.

*5 != "5" → Resultado: false*

Por quê? Ele entende que, após converter, os valores são iguais. Logo, a afirmação de que eles "são diferentes" é falsa.

-------

!== Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

*5 !== "5" → Resultado: true*

Por quê? Esta afirmação diz: "Eles são diferentes em valor OU tipo?". Como o tipo é diferente, a resposta é sim (verdadeiro).

## 4.6 Por que === é mais seguro em muitos casos?

É mais seguro porque ele elimina a 'adivinhação' do JavaScript. Quando usamos só ==, o navegador tenta converter os dados por conta própria para que eles se pareçam. Isso pode formar erros graves: por exemplo, o número 0 pode ser lido como false, ou uma string vazia "" pode ser lida como 0. Usando ===, eu garanto que a comparação só seja verdadeira se o dado for exatamente o que eu espero, tanto no valor quanto no formato (tipo), evitando que o sistema aceite dados errados por engano.

# 5. Estruturas condicionais

## 5.1 if

A estrutura if no JavaScript avalia uma condição entre parênteses; se verdadeira, executa o bloco de código entre chaves {}. Caso falso, o código é ignorado ou trata opções adicionais usando else if ou else. É uma das formas fundamentais de tomada de decisão, permitindo controle de fluxo.

if (condicao) {
  // código executado se a condição for verdadeira
}

## 5.2 if...else

A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

*if (condição) afirmação1 [else afirmação2]*

if (condicao) {
  // código se for true
} else {
  // código se for false
}

## 5.3 switch

A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.

switch (expressão) {
  case valor1:
    // Código executado se expressão === valor1
    break;
  case valor2:
    // Código executado se expressão === valor2
    break;
  default:
    // Código executado se nenhum caso for correspondido
}


# 6. Estruturas de repetição

## 6.1 for

É uma estrutura de controle de fluxo usada para executar um bloco de código repetidamente com base em uma condição. É especialmente útil quando o número de iterações é conhecido antecipadamente, como ao iterar sobre um intervalo de valores, arrays e coleções.

*Exemplo:*

classe Geeks {
public static void main ( String [] args ) {
para ( int i = 1 ; i <= 5 ; i ++ ) {
System.out.println ( i ) ;​​​
}
System.out.println ( " O loop terminou ." ) ;
}
}

## 6.2 while

O loop while é útil quando o número de iterações não é conhecido de antemão e depende de uma condição que é avaliada antes de cada iteração.

*Exemplo:*

public class WhileExample {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            System.out.println("i is: " + i);
            i++;
        }
    }
}


# 7. Funções

## 7.1 O que é uma função?

As funções são chamadas de métodos. Elas são blocos de código projetados para realizar uma tarefa específica e podem ser reutilizadas em diferentes partes do seu programa. Pense nos métodos como os comandos de uma nave que te ajudam a explorar os planetas do universo Rocket Seat, de forma rápida e eficiente.

## 7.2 Como declarar uma função?

A declaração function define uma função com os especificados parâmetros.
Você pode também definir funções usando o construtor Function e uma function expression.

*Sintaxe:*

function name([param,[, param,[..., param]]]) {
   [statements]
}

name: O nome da função.
param: O nome de um argumento a ser passado para a função. Uma função pode ter atè 255 argumentos.
statements: As instruções que compõem o corpo da função.

## 7.3 Como chamar uma função?

Utilize o nome dela seguido de parênteses (). Se a função exigir parâmetros, passe os valores dentro dos parênteses. A sintaxe básica é nomeDaFuncao();. Se a função retornar um valor, você pode armazená-lo em uma variável, ex: let resultado = soma(2, 3);

## 7.4 Função com parâmetro

São blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

## 7.5 Função com retorno

A funcionalidade final de uma função deve receber um retorno, ou seja, ela deve fazer alguma coisa, essa alguma coisa será desenvolvida com return.


# 8. Manipulação de página com JavaScript

## *document*

#### Para que serve: 
#### O document representa toda a página HTML. Ele permite que o JavaScript acesse e modifique elementos da página.
---------------------------------------------------------------
## *getElementById()*

#### Para que serve:
#### Seleciona um elemento da página usando o id.
---------------------------------------------------------------
## *querySelector()*

#### Para que serve:
#### Seleciona o primeiro elemento que corresponde a um seletor CSS.
---------------------------------------------------------------
## *.value*

#### Para que serve:
#### Usado para pegar ou alterar o valor de um input.
---------------------------------------------------------------
## *.checked*

#### Para que serve:
#### Verifica se um checkbox ou radio está marcado.
---------------------------------------------------------------
## *.textContent*

#### Para que serve:
#### Altera ou pega o texto de um elemento.
---------------------------------------------------------------
## *.style*

#### Para que serve:
#### Permite alterar o estilo CSS diretamente pelo JavaScript.
---------------------------------------------------------------
## *classList*

#### Para que serve:
#### Adiciona ou remove classes CSS de um elemento.
---------------------------------------------------------------
## *addEventListener()*

#### Para que serve:
#### Adiciona um evento a um elemento (ex: clique).
---------------------------------------------------------------
## *querySelectorAll()*

#### Para que serve:
#### Seleciona todos os elementos que correspondem a um seletor.
---------------------------------------------------------------
## *checkValidity()*

#### Para que serve:
#### Verifica se um formulário está válido de acordo com as regras do HTML.
---------------------------------------------------------------
## *DOMContentLoaded*

#### Para que serve:
#### Executa o JavaScript quando o HTML terminar de carregar.
---------------------------------------------------------------
## *createElement()*

#### Para que serve:
#### Cria um novo elemento HTML pelo JavaScript.
---------------------------------------------------------------
## *appendChild()*

#### Para que serve:
#### Adiciona um elemento dentro de outro.
---------------------------------------------------------------
## *remove()*

#### Para que serve:
#### Remove um elemento da página.


----


## REFERÊNCIAS:

https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
https://www.alura.com.br/artigos/html-css-e-js-definicoes?srsltid=AfmBOooNZKGUn8ZiO85jJaOtJV4woabzOkmFvHc5toeuNkUtBiQo_y8l
https://prp.usp.br/wp-content/uploads/sites/248/2020/073Livro-Arduino-Introdu%C3%A7%C3%A3o-a-Rob%C3%B3tica-Educacional-HANDS-ON-VARIAVEIS.pdf
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/#heading-global-scope
https://dev.to/nandobfr/escopo-de-funcao-escopo-de-bloco-e-escopo-lexico-173n 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch 
https://sujeitoprogramador.com/javascript-diferenca-entre-e/ 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators 
https://www.devmedia.com.br/java-operadores-de-atribuicao-aritmeticos-relacionais-e-logicos/38289 
https://www.datacamp.com/pt/doc/java/while 
https://www.datacamp.com/pt/doc/java/java-for-loop 
https://medium.com/@habbema/java-fun%C3%A7%C3%B5es-490b5d4fa621 
https://www.rocketseat.com.br/blog/artigos/post/java-como-criar-utilizar-funcoes 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function 
https://cursos.alura.com.br/forum/topico-duvida-o-que-e-e-o-que-faz-o-return-em-js-297046 
