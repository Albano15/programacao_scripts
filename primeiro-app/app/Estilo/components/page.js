import estilo from '../css/style.module.css';
import estilo2 from '@/app/Estilo/components/estilo.js';
import Estilo from "@/app/Estilo/components/estilo.js";

export default function EstiloPage(props) {
    return (
        <div>
            <h1 className={estilo.h1}>Aula Estilo</h1>
            <button className={estilo.button}>Clique Aqui!</button>
            <Estilo temp={18} texto={"vai chover"} direita></Estilo>
            <Estilo temp={32} texto={"vai chover"}></Estilo>
        </div>
    )
}


