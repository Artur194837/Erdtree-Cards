// src/lib/utils.ts (oder eine andere Server-Utility-Datei)

// Definiert den Typ des Bild-Daten-Objekts aus der Datenbank
interface ImageData {
    image_data: Buffer | null;
    image_mime: string | null;
}

/**
 * Wandelt ein Datenbank-Buffer-Objekt in einen Base64 Data URL String um.
 * Der Browser kann diesen String direkt als Bildquelle verwenden.
 */
export function bufferToBase64ImageSrc({ image_data, image_mime }: ImageData): string | null {
    // 1. Prüfen auf fehlende Daten
    if (!image_data || !image_mime) {
        return null;
    }

    // 2. Konvertierung des Node.js Buffer in einen Base64 String
    const base64String = image_data.toString('base64');

    // 3. Erstellen des vollständigen Data URL Strings: data:image/jpeg;base64,...
    const dataUrl = `data:${image_mime};base64,${base64String}`;

    return dataUrl;
}