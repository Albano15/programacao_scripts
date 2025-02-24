import styles from './CheckersBoard.module.css';

const CheckersBoard = () => {
    const board = [];

    for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
        for (let colIndex = 0; colIndex < 8; colIndex++) {
            const isDark = (rowIndex + colIndex) % 2 === 1;
            let piece = null;

            if (isDark) {
                if (rowIndex < 3) {
                    piece = 'black';
                } else if (rowIndex > 4) {
                    piece = 'white';
                }
            }

            board.push(
                <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`${styles.square} ${isDark ? styles.dark : styles.light}`}
                >
                    {piece && <div className={`${styles.piece} ${styles[piece]}`} />}
                </div>
            );
        }
    }

    return <div className={styles.board}>{board}</div>;
};

export default CheckersBoard;