import Titulo from "@/app/components/titulo.js";
import { Soma, Subtrair, Multiplicar, Dividir } from "@/app/components/calculadora.js";

export default function Aula3() {
    return (
        <div>
            <h1>Criando Componentes!</h1>
            <Titulo principal={"Palmeiras precisa de atacante!!"} secundario={"Flaco não dá mais ... @#@$"} />

            <h2>Resultados:</h2>
            <Soma valor1={10} valor2={5} />
            <Subtrair valor1={10} valor2={5} />
            <Multiplicar valor1={10} valor2={5} />
            <Dividir valor1={10} valor2={5} />
        </div>
    );
}
