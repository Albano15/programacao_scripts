export default function Estilo(props) {
    return (
        <div>
            <h3 style={{ textAlign: props.direita ? "right" : "left", color: props.temp > 30 ? "red" : "purple" }}>{props.texto}</h3>
        </div>
    )
}