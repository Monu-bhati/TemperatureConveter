
    function convertTemperature() {
      const temperatureInput = document.getElementById('temperature').value;
      const unit = document.getElementById('unit').value;
      const resultArea = document.getElementById('result');

      // Validate if the input is a number
      if (isNaN(temperatureInput)) {
        resultArea.innerHTML = 'Please enter a valid number for temperature.';
        return;
      }

      const temperature = parseFloat(temperatureInput);

      let convertedTemperature;
      let convertedUnit;

      switch (unit) {
        case 'celsius':
          convertedTemperature = (temperature - 32) * (5 / 9);
          convertedUnit = 'Celsius';
          break;
        case 'fahrenheit':
          convertedTemperature = (temperature * 9/5) + 32;
          convertedUnit = 'Fahrenheit';
          break;
        case 'kelvin':
          convertedTemperature = temperature + 273.15;
          convertedUnit = 'Kelvin';
          break;
        default:
          resultArea.innerHTML = 'Invalid unit selected.';
          return;
      }

      resultArea.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    }