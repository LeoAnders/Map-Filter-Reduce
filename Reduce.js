let loja = [

    { nome:'...',preco: 25.00 },
    { nome:'...',preco: 35.00 },
    { nome:'...',preco: 45.00},
    { nome:'...',preco: 120.00 },
    { nome:'...',preco: 700.60 }

]



function  somar(total, numero){

    return total + numero.preco
        

}

let resultado = loja.reduce(somar, 0)
console.log(resultado);