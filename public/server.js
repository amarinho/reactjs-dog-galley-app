'use strict';

const express = require('express');
const localPath = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
const winston = require('winston');
const helmet = require('helmet');
const hsts = require('hsts');

const app = express();

const DIST_DIR = localPath.join(__dirname,  '../dist');
const HTTP_PORT = 3000;
const CACHE_TIME_TO_LIVE_IN_MILI_SECONDS = 86400000; //one day
const T_180_DAYS_IN_SECONDS = 15552000;

winston.transports.DailyRotateFile = require('winston-daily-rotate-file');

const LOG_FILE_PREFIX = 'application-%DATE%.log';
const LOG_PATH = './log';
const LOG_LEVEL = 'info';

const myWinstonOptions = {
    level: LOG_LEVEL,
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: LOG_PATH + '/error.log', level: 'error' }),
        new winston.transports.File({ filename: LOG_PATH + '/combined.log' }),
    ],
};

const logger = new winston.createLogger(myWinstonOptions);

const DailyRotateFile = require('winston-daily-rotate-file');

const rotateOpts = {
    filename: localPath.join(LOG_PATH, LOG_FILE_PREFIX),
    prettyPrint: false,
    json: false,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '7d'
};

logger.configure({
    level: 'verbose',
    transports: [
        new DailyRotateFile(rotateOpts)
    ]
});

const logRequest = (req, res, next) => {
    logger.info(req.url);
    next()
};

const logError = (err, req, res, next) => {
    logger.error(err);
    next()
};

app.use(logRequest);
app.use(logError);
app.use(morgan('combined'));
app.use(compression());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(hsts({ maxAge: T_180_DAYS_IN_SECONDS, includeSubDomains: true, force: true, preload: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('port', HTTP_PORT);

const PORT = app.get('port');

app.listen(PORT, function() {
    logger.info('server listening to port ' + PORT);
});

const withCacheHeaders = (res) => {
    res.setHeader('Cache-Control', 'public, immutable');
    res.setHeader('Expires', new Date(Date.now() + CACHE_TIME_TO_LIVE_IN_MILI_SECONDS).toUTCString());
};

const noCacheHeaders = (res) => {
    res.setHeader('Cache-Control', 'public, no-cache');
    res.setHeader('Pragma', 'no-cache');
};

const shouldAddCacheHeaders = (path) => {
    return !(path.endsWith('config.js') || path.endsWith('.json') || path.endsWith('index.html'));
};

const serverOptions = () => {
    return {
        etag: true,
        lastModified: true,
        setHeaders: (res, path) => {
            if (shouldAddCacheHeaders(path)) {
                withCacheHeaders(res);
            } else {
                noCacheHeaders(res);
            }
        },
    };
};

app.use('/', express.static(DIST_DIR, serverOptions()));

app.get('*', (req, res) => res.sendFile(`${DIST_DIR}/index.html`));

module.exports = app;
