"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.DEFAULT = void 0;
const winston = __importStar(require("winston"));
exports.DEFAULT = {
    logger: (config) => {
        const loggers = [];
        loggers.push(buildConsoleLogger(process.env.LOG_LEVEL));
        config.general.paths.log.forEach((p) => {
            loggers.push(buildFileLogger(p, process.env.LOG_LEVEL));
        });
        return {
            loggers,
            maxLogStringLength: 100,
            maxLogArrayLength: 10, // the maximum number of items in an array to log before collapsing into one message
        };
    },
};
exports.test = {
    logger: (config) => {
        const loggers = [];
        loggers.push(buildConsoleLogger("crit"));
        config.general.paths.log.forEach((p) => {
            loggers.push(buildFileLogger(p, "debug", 1));
        });
        return { loggers };
    },
};
// helpers for building the winston loggers
function buildConsoleLogger(level = "info") {
    return function (config) {
        return winston.createLogger({
            format: winston.format.combine(winston.format.timestamp(), winston.format.colorize(), winston.format.printf((info) => {
                return `${info.timestamp} - ${info.level}: ${info.message} ${stringifyExtraMessagePropertiesForConsole(info)}`;
            })),
            level,
            levels: winston.config.syslog.levels,
            transports: [new winston.transports.Console()],
        });
    };
}
function buildFileLogger(path, level = "info", maxFiles = undefined) {
    return function (config) {
        const filename = `${path}/${config.process.id}-${config.process.env}.log`;
        return winston.createLogger({
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            level,
            levels: winston.config.syslog.levels,
            transports: [
                new winston.transports.File({
                    filename,
                    maxFiles,
                }),
            ],
        });
    };
}
function stringifyExtraMessagePropertiesForConsole(info) {
    const skippedProperties = ["message", "timestamp", "level"];
    let response = "";
    for (const key in info) {
        const value = info[key];
        if (skippedProperties.includes(key)) {
            continue;
        }
        if (value === undefined || value === null || value === "") {
            continue;
        }
        response += `${key}=${value} `;
    }
    return response;
}
