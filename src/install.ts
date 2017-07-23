import * as path from 'path';
import * as chalk from 'chalk';
import * as windows from 'node-windows';

const serviceName = 'Dynamic IP Store [0.1.0]';
const currentPath = path.join(__dirname, 'service.js');

const svc = new windows.Service({
  name: serviceName,
  description: 'Dynamic IP Store sends your IP to the API Service on a regular basis',
  script: currentPath
});

svc.on('install', () => {
  console.log(chalk.green(`Successfully installed ${serviceName}`));
  svc.start();
});

console.log(chalk.blue(`Installing ${serviceName}`));
svc.install();