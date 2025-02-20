import estilo from '../css/style.module.css';

export default function EstiloPage(props) {
    return (
        <div>
            <h1 className={estilo.h1}>Aula Estilo</h1>
            <button className={estilo.button}>Clique Aqui!</button>
        </div>
    )
}


