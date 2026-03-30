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

Existem várias maneiras de incorporar JavaScript em um documento HTML:

Inline: Inserção de código JavaScript diretamente dentro de tags HTML usando o atributo onclick, onload, etc.

Interno: Uso da tag <script> dentro do <head> ou <body> do documento HTML.

Externo: Linkar arquivos JavaScript externos usando a tag <script src=”caminho/para/arquivo.js”></script>.

**--**

**Diferença entre script dentro do HTML e script em arquivo separado**

O script interno é escrito diretamente no HTML, sendo útil apenas para testes rápidos ou funções minúsculas. Já o script externo fica em um arquivo .js separado, o que organiza o projeto, permite reutilizar o código em várias páginas e melhora a velocidade de carregamento através do cache do navegador.

**--**

**Como declarar variáveis?**

Declarar uma variável em JavaScript significa criar um espaço para guardar um valor que pode ser usado no programa. Isso pode ser feito usando var, let ou const.

**--**

**Diferença entre var, let e const**

Antes do ECMAScript 6, as variáveis em JavaScript eram declaradas principalmente com var.

O var pode ter escopo global (quando é declarado fora de uma função) ou escopo de função (quando é declarado dentro de uma função, podendo ser usado apenas nela).

Outra característica é que variáveis declaradas com var podem ser redeclaradas e atualizadas sem gerar erro, o que pode causar problemas no código. Além disso, o var sofre hoisting, ou seja, sua declaração é movida para o início do escopo e inicialmente recebe o valor undefined.

Um dos principais problemas do var é que ele pode ser redefinido dentro de blocos, como em um if, afetando o valor da variável fora do bloco e podendo gerar erros inesperados no programa. Por causa dessas limitações, surgiram let e const, que oferecem mais controle sobre o escopo das variáveis.

**--**

**O que é escopo de variável?**

Escopo de variável é o local do código onde a variável pode ser usada. Dependendo de onde ela é criada, ela pode ter escopo global, de função ou de bloco.

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

Declarar uma função significa criar um bloco de código que executa uma tarefa específica. Em JavaScript isso é feito usando a palavra function, seguida do nome da função, parênteses e o código que será executado.

**--**

**Como fazer operações aritméticas e lógicas básicas?**

As operações aritméticas são usadas para fazer cálculos matemáticos, como soma, subtração, multiplicação e divisão. Já as operações lógicas são usadas para comparar valores e verificar condições dentro do programa.

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
