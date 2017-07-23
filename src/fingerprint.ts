import * as os from 'os';
import * as objectHash from 'object-hash';

export function compute(): string {
    const obj = {
        arch: os.arch(),
        cpus: os.cpus().map((x) => x.model),
        homedir: os.homedir(),
        hostname: os.hostname(),
        platform: os.platform(),
        release: os.release(),
        totalMem: os.totalmem(),
        type: os.type(),
        username: os.userInfo().username
    };

    return objectHash(obj);
}