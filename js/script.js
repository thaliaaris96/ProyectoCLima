// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código JavaScript.
document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencias a los elementos HTML que vamos a interactuar.
    const locationInput = document.getElementById("locationInput");
    const getWeatherButton = document.getElementById("getWeatherButton");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    const errorMessage = document.getElementById("errorMessage");

    // Agrega un evento de clic al botón "Obtener Pronóstico".
    getWeatherButton.addEventListener("click", function () {
        // Obtiene la ubicación ingresada por el usuario.
        const location = locationInput.value;

        // Verifica si el campo de ubicación está vacío.
        if (!location) {
            errorMessage.textContent = "Por favor, ingrese una ubicación válida.";
            clearWeatherData(); // Limpia los datos del pronóstico del tiempo en la interfaz.
            return;
        }

        // Llama a la función que obtiene el pronóstico del tiempo usando una API aquí.
        // En este ejemplo, estamos simulando la obtención de datos, pero en la aplicación real
        // deberías hacer una solicitud HTTP a una API real.

        // Ejemplo de cómo actualizar la interfaz después de obtener la respuesta:
        temperature.textContent = "25°C";
        description.textContent = "Soleado";
        humidity.textContent = "65%";
        windSpeed.textContent = "10 km/h";
        errorMessage.textContent = "";
    });

    // Función para limpiar los datos del pronóstico del tiempo en la interfaz.
    function clearWeatherData() {
        temperature.textContent = "";
        description.textContent = "";
        humidity.textContent = "";
        windSpeed.textContent = "";
    }
});
