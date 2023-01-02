import chalk from 'chalk'; 
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
  console.log(
      dedent` ${chalk.bgCyan(' HELP ')}
      Without parametres - output the weather
      -s [CITY] for set the city
      -h for output help
      -t [API_KEY] for save token
    `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent` ${chalk.bgMagenta(' WEATHER ')} Weather in the city ${res.name}
    ${icon}  ${res.weather[0].description}
    Temperature: ${res.main.temp} °C (feels like: ${res.main.feels_like} °C)
    Pressure: ${res.main.pressure} mmHg 
    Humidity: ${res.main.humidity} %
    Wind speed: ${res.wind.speed} m per sec
  `
);
};

export { printError, printSuccess, printHelp, printWeather };

