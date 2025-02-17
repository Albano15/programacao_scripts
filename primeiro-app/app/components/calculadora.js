export function Soma({ valor1, valor2 }) {
    return <p>Soma: {valor1 + valor2}</p>;
}

export function Subtrair({ valor1, valor2 }) {
    return <p>Subtração: {valor1 - valor2}</p>;
}

export function Multiplicar({ valor1, valor2 }) {
    return <p>Multiplicação: {valor1 * valor2}</p>;
}

export function Dividir({ valor1, valor2 }) {
    return <p>Divisão: {valor2 !== 0 ? valor1 / valor2 : "Erro: Divisão por zero!"}</p>;
}
