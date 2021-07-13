# Custom node.js version

Steps:

1. Execute this script **on the shell** to install node (you can change the version by editing the number) and configure npm.
```sh
npm init -y && npm i --save-dev node@14 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

2. Create the [`.replit`](https://docs.repl.it/repls/dot-replit) to execute node from the shell instead of the console. It needs to run `npm start`.


3. You need to add the start script on your package.json 
```js
  "scripts": {
    "start": "node ."
  }
```
