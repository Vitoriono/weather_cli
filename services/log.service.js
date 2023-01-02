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
}

export { printError, printSuccess, printHelp };

