import * as fingerprint from './fingerprint';
import * as cron from 'cron';

const fingerprintHash = fingerprint.compute();

new cron.CronJob('0 * * * * *', () => {
    console.log(fingerprintHash);
}, null, true);
