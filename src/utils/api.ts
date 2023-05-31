const OPEN_WEATHER_API_KEY = '638f948d0e20af77b71b9a15cf5795ec';

export interface OpenWeatherData {
    name: string
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    }
    weather: {
        description: string
        icon: string
        id: number
        main: string
    }[]
    wind: {
        speed: number
        degree: number
    }
}

export async function fetchOpenWeatherData(city: string, tempScale: OpenWeatherTempScale): Promise<OpenWeatherData>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${tempScale}&appid=${OPEN_WEATHER_API_KEY}`)

    if(!response.ok){
        throw new Error('city not found');
    }

    const data: OpenWeatherData = await response.json();
    
    return data;
}

export type OpenWeatherTempScale = 'metric' | 'imperial'

export function getWeatherIconSrc(iconcode: string){
    return `https://openweathermap.org/img/wn/${iconcode}@2x.png`
}