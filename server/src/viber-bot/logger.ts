import * as winston from 'winston';

const wcf = require('winston-console-formatter');

export function createLogger() {
    const logger = winston.createLogger({
        level: 'debug',
        format: winston.format.json(),
    }); // We recommend DEBUG for development
    const {formatter, timestamp} = wcf();
    //
    // logger.add(winston.transports.Console({
    //     format: formatter,
    // }));
    //

    return logger;
}
