#!/usr/bin/env node

import { getArgs } from './helpers/args.js';

const initCLI = () => {
  const args = getArgs(process.argv)
  console.log(args);
  if(args.h) {
    // Output by help
  }
  if(args.s){
    // Save the city
  }
  if(args.t){
    // Save the tocken
  }
  //Output the weather

};

initCLI();