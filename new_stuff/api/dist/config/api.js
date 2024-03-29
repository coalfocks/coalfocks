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
exports.production = exports.test = exports.DEFAULT = void 0;
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
exports.DEFAULT = {
    general: (config) => {
        const packageJSON = JSON.parse(fs
            .readFileSync(path.join(__dirname, "..", "..", "package.json"))
            .toString());
        return {
            apiVersion: packageJSON.version,
            serverName: packageJSON.name,
            welcomeMessage: `Welcome to the ${packageJSON.name} api`,
            // A unique token to your application that servers will use to authenticate to each other
            serverToken: "change-me",
            // the redis prefix for Actionhero cache objects
            cachePrefix: "actionhero:cache:",
            // the redis prefix for Actionhero cache/lock objects
            lockPrefix: "actionhero:lock:",
            // how long will a lock last before it expires (ms)?
            lockDuration: 1000 * 10,
            // How many pending actions can a single connection be working on
            simultaneousActions: 5,
            // allow connections to be created without remoteIp and remotePort (they will be set to 0)
            enforceConnectionProperties: true,
            // disables the whitelisting of client params
            disableParamScrubbing: false,
            // enable action response to logger
            enableResponseLogging: false,
            // params you would like hidden from any logs. Can be an array of strings or a method that returns an array of strings.
            filteredParams: [],
            // responses you would like hidden from any logs. Can be an array of strings or a method that returns an array of strings.
            filteredResponse: [],
            // values that signify missing params
            missingParamChecks: [null, "", undefined],
            // The default filetype to server when a user requests a directory
            directoryFileType: "index.html",
            // What log-level should we use for file requests?
            fileRequestLogLevel: "info",
            // The default priority level given to middleware of all types (action, connection, say, and task)
            defaultMiddlewarePriority: 100,
            // Which channel to use on redis pub/sub for RPC communication
            channel: "actionhero",
            // How long to wait for an RPC call before considering it a failure
            rpcTimeout: 5000,
            // should CLI methods and help include internal Actionhero CLI methods?
            cliIncludeInternal: true,
            // configuration for your actionhero project structure
            paths: {
                action: [path.join(__dirname, "..", "actions")],
                task: [path.join(__dirname, "..", "tasks")],
                server: [path.join(__dirname, "..", "servers")],
                cli: [path.join(__dirname, "..", "bin")],
                initializer: [path.join(__dirname, "..", "initializers")],
                public: [path.join(process.cwd(), "public")],
                pid: [path.join(process.cwd(), "pids")],
                log: [path.join(process.cwd(), "log")],
                plugin: [path.join(process.cwd(), "node_modules")],
                test: [path.join(process.cwd(), "__tests__")],
                // for the src and dist paths, assume we are running in compiled mode from `dist`
                src: path.join(process.cwd(), "src"),
                dist: path.join(process.cwd(), "dist"),
            },
            // hash containing chat rooms you wish to be created at server boot
            startingChatRooms: {
            // format is {roomName: {authKey, authValue}}
            // 'secureRoom': {authorized: true},
            },
        };
    },
};
exports.test = {
    general: (config) => {
        return {
            serverToken: `serverToken-${process.env.JEST_WORKER_ID || 0}`,
            startingChatRooms: {
                defaultRoom: {},
                otherRoom: {},
            },
            rpcTimeout: 3000,
        };
    },
};
exports.production = {
    general: (config) => {
        return {
            fileRequestLogLevel: "debug",
        };
    },
};
