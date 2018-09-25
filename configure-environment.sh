#!/bin/bash

NVM_ENVIRONMENT="$HOME/.nvm/nvm.sh"
if [ ! -f "$NVM_ENVIRONMENT" ]; then
  echo "Will install NVM"
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  if [ ! -f "$HOME/.bash_profile" ]; then
    touch "$HOME/.bash_profile"
    export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  fi
else
  . "$NVM_ENVIRONMENT"
fi

echo "NVM detected. Loading Node version..."
nvm install

echo "Upgrading NPM..."
npm i -g npm@6

echo "Installing project dependencies..."
npm i

. ./build-database.sh

echo "All set!"
