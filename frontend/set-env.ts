// Load node modules
const colors = require('colors');
const fs = require('fs');
const nameAPP = require('./package.json')['name'];
// Configuracion Environments Angular
let targetPath;
let envConfigFile;

if (process.env.NODE_ENV === 'production') {
   targetPath = './src/environments/environment.prod.ts';
   envConfigFile = `export const environment = {
      APP_NAME: '${nameAPP}',
      production: true,
      API_MARVEL: '${process.env.API_MARVEL}',
};
`;
} else {
   require('dotenv').config();
   targetPath = './src/environments/environment.dev.ts';
   envConfigFile = `export const environment = {
      APP_NAME: '${nameAPP} - Desarrollo',
      production: false,
      API_MARVEL: '${process.env.API_MARVEL}'
};
`;
}

console.log(colors.blue('Variables De Entorno: \n'));
console.log(colors.green(envConfigFile));

fs.writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
      throw console.error(err);
   } else {
      console.log(colors.blue(`Angular environment.ts reemplazado correctamente con: ${targetPath} \n`));
   }
});