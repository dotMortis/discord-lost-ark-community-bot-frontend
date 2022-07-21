import { default as pkg } from '../../package.json';

export const environment = {
    production: true,
    apiRoot: 'https://api.loa.ragtag.rocks/v1',
    version: pkg.version,
    profiling: false,
};
