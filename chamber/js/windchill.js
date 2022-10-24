function calculateWindChill(temp, windSpeed) {

    if (windSpeed > 3.0 && temp <= 50.0) {
        let f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        return f;
    }
    else {
        return "N/A";
    }
}

