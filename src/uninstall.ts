import * as chalk from 'chalk';
import * as windows from 'node-windows';

const serviceName = 'Dynamic IP Store [0.1.0]';

const Service = windows.Service;

const svc = new windows.Service({
  name: serviceName
});

svc.on('uninstall', () => {
  console.log(chalk.green(`Successfully uninstalled ${serviceName}`));
});

console.log(chalk.blue(`Uninstalling ${serviceName}`));
svc.uninstall();