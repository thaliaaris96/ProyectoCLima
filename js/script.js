// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código JavaScript.
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('getWeatherButton');
    const inputUbi = document.getElementById('locationInput');
    const temperatura = document.getElementById('temperature');
    const descripcion = document.getElementById('description');
    const humedad = document.getElementById('humidity');
    const viento = document.getElementById('windSpeed');
    const ubication = document.getElementById('ubication');
    const errorMessage = document.getElementById('errorMessage'); // Nuevo elemento para mostrar errores

    function Pasaje_Kelvin_Celcius(temp) {
        let tempCelcius = temp - 273.15;
        let tempRedondeada = Math.round(tempCelcius);
        return tempRedondeada + "°C";
    }

    button.addEventListener('click', function () {
        const ubicacion = inputUbi.value;

        if (ubicacion) {
            const apiKey = '68173e9e371142fa668996603e3fc023'; // Reemplaza con tu propia clave de API de OpenWeatherMap

            // Construye la URL para la solicitud a la API
            let URLFetch = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&appid=${apiKey}`;

            // Realiza la solicitud a la API
            fetch(URLFetch)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    mostrar(data);
                })
                .catch(function (error) {
                    mostrarError("Ha ocurrido un error al obtener datos del pronóstico del tiempo.");
                    console.error("Ha ocurrido el siguiente error: ", error);
                });
        }
    });

    function mostrar(data) {
        if (data) {
            ubication.textContent = `${data.name}`;
            temperatura.textContent = `${Pasaje_Kelvin_Celcius(data.main.temp)}`;
            descripcion.textContent = `${data.weather[0].description}`;
            humedad.textContent = ` ${data.main.humidity}%`;
            viento.textContent = `${data.wind.speed} m/s`;
            errorMessage.textContent = ""; // Limpia cualquier mensaje de error previo
        } else {
            mostrarError("No se encontraron datos para la ubicación especificada.");
        }  
    }

    // Función para limpiar los datos del pronóstico del tiempo en la interfaz.
    function clearWeatherData() {
        ubication.textContent = "";
        temperatura.textContent = "";
        descripcion.textContent = "";
        humedad.textContent = "";
        viento.textContent = "";
    }

    function mostrarError(message) {
        errorMessage.textContent = message;
    }
});




