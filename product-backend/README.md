# Products backend
I have to use mongodb clustor for live db connection.

## Requirements

For development, you will only need Node.js and a node and node version management, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm
      $ sudo apt install nvm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.14.0

    $ npm --version
    6.4.1

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

# Git repo
    $ git clone https://github.com/niklat22/product-management

## Install product back end
    $ cd product-management/product-backend
    $ npm i
    
## Install product front end 
    $ cd product-management/product-frontend
    $ npm i

# Front End Runing
    $ npm run start

# Back End Runing 
    $ npm run devstart

# Generat Build
    $ npm run build