#!/bin/zsh

# note: change shebang above for bash shells /bin/bash

# make sure babel and the presets below is installed via npm first
npx babel --presets=@babel/preset-env,@babel/preset-react ./src --out-dir ./lib


