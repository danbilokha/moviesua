import { Request, Response } from 'express';

let pkg = require(__dirname + '/../../../../package.json');

export let base = (req: Request, res: Response) => {
    res.json({
        message: 'Welcome to API sekeleton.',
        version: pkg.version || 'Unkown',
    });
};
