'use client';
import { usePathname } from 'next/navigation';

export default function GamePage() {
    const pathname = usePathname(); // Esto te da la ruta completa
    const pathSplited = pathname.split('/'); // Como '/juegos/[game]', 'game' estará en la posición 2

    return (
        <div>
            <h1>Plataforma: {pathSplited[1]}</h1>
            <h1>Juego: {pathSplited[2]}</h1>
        </div>
    );
}
