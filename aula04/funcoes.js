function ExibirMsg(msg) {
    console.log(msg)
}

ExibirMsg("Oi professor, bom dia!")
ExibirMsg("Estou com sono")

//Função básica


function ExibirMsg2(msg) {
    let mensagem = msg
    return mensagem
}

console.log(ExibirMsg2("Funcionou!"))

function Soma(n1, n2) {
    return n1 + n2
}

console.log(Soma(2, 6))




//Arrow function ou Função anônima 

const Potencia = (n, p) => {
    return Math.pow(n, p)
}

console.log(Potencia(4, 2))

const Raizqrd = (n) => {
    return  Math.sqrt(n)
}

console.log(Raizqrd(4))




//media >= 6.00 = Aprovado
//media < 6.00 || >= 4.00 = Recuperação
//media < 4.00

const Media = (nota1, nota2) => {
    let NotaFinal = (nota1 + nota2)/2

    if (NotaFinal < 4.00) {
        return "Reprovado"
    }

    if (NotaFinal >= 6.00) {
        return "Aprovado"
    }

    return "Reprovado"
}

console.log(Media(6, 4))
