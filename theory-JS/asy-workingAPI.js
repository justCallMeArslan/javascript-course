// API - Application Programming Interface - 


const fetchWeatherData = async () => {
    const apiKey = 'CEYGX3757GY68JLTKBXRXVXB6';
    const location = 'Aktau';
    const unitGroup = 'metric';
    const contentType = 'json';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/
    rest/services/timeline/${location}?unitGroup=${unitGroup}&key=${apiKey}
    &contentType=${contentType}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Weather data:', data);
    } catch (error) {
        console.error('Failed to fetch data', error);
    }
};

fetchWeatherData();