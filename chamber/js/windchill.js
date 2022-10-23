function calculateWindChill(temp, windSpeed) {

    if (windSpeed) {
        let f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        return f;
    }
}