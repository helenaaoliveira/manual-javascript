# Manual-JavaScript

**O que é JavaScript?**

JavaScript é uma linguagem de programação usada para deixar as páginas da web mais interativas e dinâmicas. Com ela, é possível criar funções que vão além de apenas mostrar informações estáticas, como conteúdos que mudam automaticamente, mapas interativos, animações e gráficos.

Nas páginas web, o JavaScript funciona junto com o HTML e o CSS. O HTML organiza o conteúdo da página, o CSS cuida da aparência e o JavaScript adiciona o comportamento e a interatividade, sendo considerado a terceira camada das tecnologias básicas da web. olá está me vendo?

**--**

**Para que JavaScript serve em páginas web?**

Quando você abre uma página em um navegador, o código HTML, CSS e JavaScript é executado dentro da guia do navegador, que funciona como um ambiente que transforma esse código na página que vemos.

O JavaScript é muito usado para modificar o conteúdo e o estilo da página, usando a API do Document Object Model. O código normalmente é executado na ordem em que aparece, por isso é importante que o JavaScript rode depois do HTML e do CSS, para evitar erros.

**--**

**Como JavaScript se relaciona com HTML e CSS?**

O HTML cuida da estrutura da página, o CSS define a aparência e o JavaScript adiciona o comportamento e a interatividade.

**--**

**Onde JavaScript pode ser usado no HTML?**

O JavaScript pode ser usado dentro do HTML usando a tag:

<script>
  
  console.log("Olá mundo");
  
</script>

Essa tag permite escrever código JavaScript dentro da página.

**--**

**Diferença entre script dentro do HTML e script em arquivo separado**

*Script dentro do HTML*

<script>
  
alert("Olá");
  
</script>

O código fica dentro do próprio arquivo HTML.

*Script em arquivo separado*

<script src="script.js"></script>


*JavaScript:*

alert("Olá");

A vantagem do arquivo separado é que organiza melhor o projeto e facilita a manutenção do código.

**--**

**Como declarar variáveis?**

Variáveis são usadas para armazenar informações dentro do programa.

No JavaScript podemos declarar variáveis usando:

var

let

const

Exemplo:

let nome = "Ana";

**--**

**Diferença entre var, let e const**

*var*

-forma mais antiga

-pode ser redeclarada

-tem escopo de função

var idade = 20;

*let*

-usada em códigos mais modernos

-pode ter seu valor alterado

-tem escopo de bloco


let idade = 20;

*const*

-usada para valores que não mudam

-não pode ser alterada depois

const pi = 3.14;

**--**

**O que é escopo de variável?**

Escopo é o local do código onde a variável pode ser usada.

Existem três principais tipos:

*Escopo global*

A variável pode ser usada em todo o programa.

var nome = "Ana";

Escopo de função

A variável só existe dentro da função.

function exemplo() {

  var idade = 20;
  
}

*Escopo de bloco*

A variável só existe dentro do bloco {}.

if (true) {

  let numero = 10;
  
}

**--**

**Diferença entre == e ===**

== compara apenas o valor.

=== compara valor e tipo.

Por isso, na maioria dos casos, === é considerado mais seguro, pois evita comparações incorretas causadas pela conversão automática de tipos.

**--**

**Diferença entre != e !==**

!= verifica se os valores são diferentes, podendo converter o tipo.

!== verifica se os valores ou os tipos são diferentes, sem conversão.

Por isso, assim como ===, o operador !== é considerado mais seguro, pois evita erros causados pela conversão automática de tipos.

**--**

**Como declarar funções?**

Funções são blocos de código que executam uma tarefa específica.

Exemplo:

function saudacao() {

  console.log("Olá");
  
}

Para executar a função:

saudacao();

**--**

**Como fazer operações aritméticas e lógicas básicas?**

Operações aritméticas

let a = 10;

let b = 5;

let soma = a + b;

let multiplicacao = a * b;

Principais operadores:

+ soma
  
- subtração
  
* multiplicação
  
/ divisão

**--**

**Como usar estruturas condicionais?**

As estruturas condicionais permitem que o programa execute diferentes ações dependendo de uma condição. As mais usadas no JavaScript são if, if...else e switch.

**--**

**Como usar estruturas de repetição?**

As estruturas de repetição permitem executar um mesmo bloco de código várias vezes. As mais comuns em JavaScript são for, quando sabemos quantas repetições acontecerão, e while, quando o código repete enquanto uma condição for verdadeira.

**--**


**Como JavaScript pode interagir com elementos da página?**

O JavaScript pode interagir com os elementos da página usando o DOM. Isso permite modificar textos, estilos, valores de formulários e responder a ações do usuário, tornando a página web dinâmica e interativa.

**--**

**--**

**REFERÊNCIAS**

https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript 

https://www.locaweb.com.br/ajuda/wiki/linkar-javascript-no-html/

https://www.bbc.com/news/world/middle_east

https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/script

https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/
