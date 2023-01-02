
//Map
let array = [

    { nome:'...',preco:'26.20',desconto: 0.2 },
    { nome:'...',preco:'36.30',desconto: 0.3 },
    { nome:'...',preco:'46.40',desconto: 0.8 },
    { nome:'...',preco:'126.00',desconto: 0.5 },
    { nome:'...',preco:'709.60',desconto: 0.3 }

]
//nesse exemplo vamos transformar esse array para pegar todos os preços ja com desconto calculado

function desconto(produto) {
    return produto.preco * (1 - produto.desconto)
}

let resultado = array.map(desconto)
console.log(resultado);

