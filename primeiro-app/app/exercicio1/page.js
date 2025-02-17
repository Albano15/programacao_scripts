export default function Exercicio1page() {
    const array = [];
    for (let i = 0; i <= 10; i++) {
        array.push(<p key={i}>{i}</p>);
    }

    return (
        <div>
            <h1>Desafio - Lista de números</h1>
            <div>
                {array}
            </div>
        </div>
    );
}
