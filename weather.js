#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather, getIcon } from './services/api.service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue } from './services/storage.service.js'

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

const saveCity = async (city) => {
  if(!city.length) {
    printError('City has not been entered');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('The city has been saved');
  } catch(e) {
    printError(e.message);
  }
}

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon)); 
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
    saveCity(args.s);
  }
  if(args.t){
    return saveToken(args.t);
  }
  getForcast();
};



initCLI();