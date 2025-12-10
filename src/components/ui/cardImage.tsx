// src/components/CardImage.tsx (Dies ist die Komponente, die das Bild rendert)

import Image from 'next/image'; // Empfohlen für Optimierung
import { bufferToBase64ImageSrc } from '@/app/lib/imageReconstruction'; // Import der Utility-Funktion
import { Children } from 'react';

interface CardImageProps {
    className: string;
    image_data: Buffer | null;
    image_mime: string | null;
    cardName: string; // Für das 'alt'-Attribut
    children?: React.ReactNode;
}

// Dies ist eine Server Component, da sie den Node.js Buffer verarbeitet
export function CardImage({ className, image_data, image_mime, cardName, children }: CardImageProps) {
    
    // Konvertierung der Buffer-Daten in einen Base64-String
    const src = bufferToBase64ImageSrc({ image_data, image_mime });

    if (!src) {
        return <div className="text-red-500">Bild nicht verfügbar</div>;
    }

    // Wenn Sie Next.js Image verwenden, müssen Sie die Bildgröße (width/height) kennen.
    // Wenn die Größe unbekannt ist, verwenden Sie 'fill' oder ein normales <img>
    return (
        // Hier wird der Base64-String als Quelle verwendet
        <div className={`${className} relative overflow-hidden border-1 border-black w-[220px] h-[250px]`}>
            <Image 
                src={src} 
                fill={true}
                alt={`Bild von ${cardName}`} 
                className="object-cover border-3 border-gray-400"
            />
            {children}
        </div>
        // Wenn Sie ein einfaches <img> verwenden möchten:
        /* <img src={src} alt={`Bild von ${cardName}`} className="..." /> */
    );
}