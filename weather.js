#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'

const saveToken = async (token) => {
  if(!token.length) {
    printError('Token has not been entered');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('The token has been saved');
  } catch(e) {
    printError(e.message);
  }
}

const getForcast = async () => {
  try {
    const weather = await getWeather(process.env.CITY);
    console.log(weather); //Pretty output the weather
  } catch(e) {
    if(e?.response?.status == 404) {
      printError('Invalid city');
    } else if(e?.response?.status == 401) {
      printError('Invalid token');
    } else {
      printError(e.message);
    }
  }
  
}



const initCLI = () => {
  const args = getArgs(process.argv);
  
  if(args.h) {
    printHelp();
  }
  if(args.s){
    // Save city
  }
  if(args.t){
    return saveToken(args.t);
  }
  getForcast();
};



initCLI();