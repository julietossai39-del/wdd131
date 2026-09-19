// Wait until the complete HTML page loads before executing script logic
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. DYNAMIC FOOTER LABELS
    // ==========================================
    const currentYearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // ==========================================
    // 2. WIND CHILL STATIC VARIABLES & EXECUTION
    // ==========================================
    // Requirements state to match your static weather content profile precisely:
    const temperatureCelsius = 27; 
    const windSpeedKmh = 6.5;

    const chillElement = document.getElementById("chill");

    if (chillElement) {
        // Requirement 4: Check viability limits before running calculation function
        if (temperatureCelsius <= 10 && windSpeedKmh > 4.8) {
            const result = calculateWindChill(temperatureCelsius, windSpeedKmh);
            chillElement.textContent = `${result.toFixed(1)} °C`;
        } else {
            chillElement.textContent = "N/A";
        }
    }
});

/**
 * Requirement 3: Calculates wind chill factor using standard metric formula
 * Note: Uses a single return line of execution code per instructions.
 * @param {number} temp - Temperature in Celsius
 * @param {number} speed - Wind speed in km/h
 * @returns {number} Calculated wind chill factor
 */
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}
