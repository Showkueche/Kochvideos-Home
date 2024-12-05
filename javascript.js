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
            kategorienh1.style.backgroundImage = "url('Logo.png'), linear-gradient(to top, transparent 0%, #FF8000 50%)"; // Frühling: orange für den Gradient
            break;
        case 'summer':
            video.src = "Sommervideo.mp4";  // Beispiel für Sommer
            kategorienh1.style.backgroundImage = "url('Logo.png'), linear-gradient(to top, transparent 0%, #006600 50%)"; // Sommer: Grün für den Gradient
            break;
        case 'autumn':
            video.src = "Halloween.mp4";  // Beispiel für Herbst
            kategorienh1.style.backgroundImage = "url('Logo.png'), linear-gradient(to top, transparent 0%, #FF8000 50%)"; // Herbst: orange für den Gradient
            break;
        case 'winter':
            video.src = "Schneefall1.mp4";  // Beispiel für Winter
            kategorienh1.style.backgroundImage = "url('Logo.png'), linear-gradient(to top, transparent 0%, #FAFAFA 50%)"; // Winter: weiß für den Gradient
            break;
        default:
            video.src = "Sommer.mp4"; // Standardvideo
            kategorienh1.style.backgroundImage = "url('Logo.png'), linear-gradient(to top, transparent 0%, #FAFAFA 50%)"; // Winter: weiß für den Gradient
            break;
    }

    // Video als Hintergrund setzen
    video.play();
}

// Skript ausführen, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', applySeasonTheme);
