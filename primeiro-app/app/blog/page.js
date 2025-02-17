export default function BlogPage() {
    const subtitulo = "Estamos aprendendo NEXT.js"
    const valor = <h3>{0.1 + 0.2}</h3>

    return (
        <div>
            <h1>Blog Page</h1>
            <h2>{subtitulo}</h2>
            {valor}
            <h3>exercicio1</h3>
        </div>
    )
}