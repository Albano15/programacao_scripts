import CheckersBoard from './components/CheckersBoard/CheckersBoard';

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
        }}>
            <CheckersBoard />
        </div>
    );
}