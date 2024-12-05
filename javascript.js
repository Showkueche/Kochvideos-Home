// Funktion zur Bestimmung der aktuellen Jahreszeit
function getSeason() {
    const month = new Date().getMonth() + 1; // Monate von 0-11, daher +1
    if (month >= 3 && month <= 5) {
        return 'spring'; // Frühling
    } else if (month >= 6 && month <= 8) {
        return 'summer'; // Sommer
    } else if (month >= 9 && month <= 11) {
        return 'autumn'; // Herbst
    } else {
        return 'winter'; // Winter
    }
}

// Funktion zur Anwendung des Themas basierend auf der Jahreszeit
function applySeasonTheme() {
    const season = getSeason();
    const video = document.getElementById("myVideo");
    const body = document.body;

    switch (season) {
        case 'spring':
            video.src = "Schneefall.mp4";  // Beispiel für Frühling
            body.style.backgroundColor = "#98FB98"; // Hellgrün für Frühling
            break;
        case 'summer':
            video.src = "Sommervideo.mp4";  // Beispiel für Sommer
            body.style.backgroundColor = "#FFD700"; // Goldgelb für Sommer
            break;
        case 'autumn':
            video.src = "Halloween.mp4";  // Beispiel für Herbst
            body.style.backgroundColor = "#FF8C00"; // Dunkelorange für Herbst
            break;
        case 'winter':
            video.src = "Schneefall1.mp4";  // Beispiel für Winter
            body.style.backgroundColor = "#ADD8E6"; // Hellblau für Winter
            break;
        default:
            video.src = "default.mp4"; // Standardvideo
            body.style.backgroundColor = "#FFFFFF"; // Standardfarbe
            break;
    }

    // Video als Hintergrund setzen
    video.play();
}

// Skript ausführen, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', applySeasonTheme);
