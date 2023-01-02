//FILTER
//digamos que queremos filtrar produtos de alto valor 

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




