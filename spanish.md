# Node.js 14 en replit

Pasos:

1. Ejecuta este script **en el shell** para instalar node (puedes escoger la version editando el numero 14) y configurar npm.
```sh
npm init -y && npm i --save-dev node@14 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

2. Crea el archivo [`.replit`](https://docs.repl.it/repls/dot-replit) para ejecutar node desde el shell en vez de la consola.
```
run="npm start"
```

3. Asegurate de tener el script start en tu archivo package.json.
```js
  "scripts": {
    "start": "node ."
  }
```

4. (Opcional) Si tenias instalado paquetes como canvas o sqlite, tienes que reconstruirlas
```
npm rebuild
```