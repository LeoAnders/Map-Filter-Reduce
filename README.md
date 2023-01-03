<h1 align="center">Map-Filter-Reduce</h1>
  
  <div align="center">
<a href="mailto:leonardoandrs15@gmail.com" alt="Gmail" target="_blank">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
</a>

<a href="https://www.linkedin.com/in/leonardo-matheus-anders-23706920a" alt="Linkedin" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div><br>

<h2 align="center" > map() - Executa uma função em todos os itens de um array </h2><br>

- O **map()** vai executar uma determinada função em cada item, e vai retornar uma nova lista com essa funcao executada em todos os itens

> Imagine que temos uma lista de produtos sendo exibidos em nossa página, e desejamos adicionar um desconto no preço desses produtos. Como poderíamos fazer isso com o map() ? Poderíamos ter um array de preços, como o abaixo:<br>

<div align="center">

``` js ,
let loja = [

    { nome:'...',preco:'26.20',desconto: 0.2 },
    { nome:'...',preco:'36.30',desconto: 0.3 },
    { nome:'...',preco:'46.40',desconto: 0.8 },
    { nome:'...',preco:'126.00',desconto: 0.5 },
    { nome:'...',preco:'709.60',desconto: 0.3 }
```
</div>

> Proximo passo e chamar o método **map()** e armazenar seu retorno em uma nova variável, chamada de **loja**, desta forma:<br>

<div align="center">

```js,

function desconto(produto) {
    return produto.preco * (1 - produto.desconto)
}

let resultado = loja.map(desconto)
console.log(resultado);
```

</div>

> É necessário definir um return no método para que ele funcione.
<br>

<h1 align="center">filter() - Filtra um array</h1>

- ele tem o objetivo de filtrar as informações de um array

- Ele irá aplicar essa condição em todos os itens de nosso array e aqueles que se enquadrarem na condição serão retornados e adicionados ao novo array de saída. Dessa forma, diferente do que ocorre no **map()** e no **reduce()** o **filter()** irá retornar sempre true ou false

> Vamos voltar no nosso exemplo dos produtos, so que dessa vez vamos filtrar os produtos que valem mais de R$1000

<div align="center">

```js,
let produtos = [

    { nome:'...',preco:'260.20',desconto: 0.2 },
    { nome:'...',preco:'360.30',desconto: 0.3 },
    { nome:'...',preco:'4350.40',desconto: 0.8 },
    { nome:'...',preco:'1223.00',desconto: 0.5 },
    { nome:'...',preco:'7095.60',desconto: 0.3 }

]

//Aplicando o filtro de produtos com o valor maior de que R$1000
function altoValor(produto){
    return produto.preco >= 1000
}

let resultado = produtos.filter(altoValor)
console.log(resultado);
```
</div>

> A função AltoValor(produto) irá conter todos os preços que possuem valores maiores de R$1000.
<br><br>
<h1 align="center">reduce() - Reduz um array em um único resultado</h1>

- O **reduce()** reduz todos os valores de um array em um único resultado, baseando-se na função que informamos para ele. Pode ser usado quando desejamos realizar alguma somatória ou então quando desejamos mesclar vários arrays

- Os dois primeiros parâmetros desse método são muito importantes. O primeiro representa o resultado final da redução do array, e o que chamamos de acumulador *“acc”* . Esse valor é incrementado ao longo do processo do reduce().

- O segundo parâmetro chamado de *”elemento”*  envolve o valor de cada índice do array. Creio que tudo irá ficar mais claro com exemplo!<br>

> Voltando a nossa loja, Imagine que possuímos uma variável que contém as informações do preço de todos os produtos

<div align="center">

```js,
let loja = [

    { nome:'...',preco: 25.00 },
    { nome:'...',preco: 35.00 },
    { nome:'...',preco: 45.00 },
    { nome:'...',preco: 120.00 },
    { nome:'...',preco: 700.60 }

]
```
</div>

> Agora imagine que desejamos saber qual foi o valor total. Precisaríamos realizar a soma de cada um dos valores deste array. 
  Utilizaremos o **reduce()**, Para isso bastaria somar o valor do total em cada volta do laço de repetição com o valor corrente do produto em cada volta.
  
  <div align="center">

```js,
function  somar(total, numero){

    return total + numero.preco
      
}

let resultado = loja.reduce(somar, 0)
console.log(resultado);
```
</div>

<h1 align="center">Conclusão</h1>

- Sempre utilizo a [técnica Feynman](https://ead.pucpr.br/blog/tecnica-feynman#:~:text=A%20t%C3%A9cnica%20Feynman%20%C3%A9%20uma,por%20exemplo%2C%20a%20Revolu%C3%A7%C3%A3o%20Francesa.) na leitura e nos meus estudos. Foi assim que criei esse readme para vermos a diferença entre os métodos **map()**, **filter()** e **reduce()** <br>

- Todo conhecimento que obtive foi através do meu curso ["ProgBR"](https://programadorbr.com/) e do canal [Cod3r Cursos](https://www.youtube.com/@cod3r) no youtube. 


<div align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>













