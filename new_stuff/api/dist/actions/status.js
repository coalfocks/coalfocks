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
exports.Status = void 0;
const actionhero_1 = require("actionhero");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
// These values are probably good starting points, but you should expect to tweak them for your application
const maxMemoryAlloted = process.env.maxMemoryAlloted || 500;
const maxResqueQueueLength = process.env.maxResqueQueueLength || 1000;
var StatusMessages;
(function (StatusMessages) {
    StatusMessages["healthy"] = "Node Healthy";
    StatusMessages["unhealthy"] = "Node Unhealthy";
})(StatusMessages || (StatusMessages = {}));
const packageJSON = JSON.parse(fs
    .readFileSync(path.normalize(path.join(__dirname, "..", "..", "package.json")))
    .toString());
class Status extends actionhero_1.Action {
    constructor() {
        super();
        this.name = "status";
        this.description = "I will return some basic information about the API";
        this.outputExample = {
            id: "192.168.2.11",
            actionheroVersion: "9.4.1",
            uptime: 10469,
        };
    }
    async run() {
        let nodeStatus = StatusMessages.healthy;
        const problems = [];
        const consumedMemoryMB = Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100;
        if (consumedMemoryMB > maxMemoryAlloted) {
            nodeStatus = StatusMessages.unhealthy;
            problems.push(`Using more than ${maxMemoryAlloted} MB of RAM/HEAP`);
        }
        let resqueTotalQueueLength = 0;
        const details = await actionhero_1.task.details();
        let length = 0;
        Object.keys(details.queues).forEach((q) => {
            length += details.queues[q].length;
        });
        resqueTotalQueueLength = length;
        if (length > maxResqueQueueLength) {
            nodeStatus = StatusMessages.unhealthy;
            problems.push(`Resque Queues over ${maxResqueQueueLength} jobs`);
        }
        return {
            id: actionhero_1.id,
            actionheroVersion: actionhero_1.actionheroVersion,
            name: packageJSON.name,
            description: packageJSON.description,
            version: packageJSON.version,
            uptime: new Date().getTime() - actionhero_1.api.bootTime,
            consumedMemoryMB,
            resqueTotalQueueLength,
            nodeStatus,
            problems,
        };
    }
}
exports.Status = Status;
