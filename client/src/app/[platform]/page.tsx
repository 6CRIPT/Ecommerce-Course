'use client';
import { usePathname } from 'next/navigation';

export default function GamePage() {
    const pathname = usePathname(); 
    const platform = pathname.split('/')[1]; 

    return <h1>Desde {platform}</h1>;
}
