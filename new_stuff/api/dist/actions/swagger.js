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
exports.Swagger = void 0;
const actionhero_1 = require("actionhero");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const SWAGGER_VERSION = "2.0";
const API_VERSION = ""; // if you need a prefix to your API routes, like `v1`
const parentPackageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "package.json")).toString());
const responses = {
    200: {
        description: "successful operation",
    },
    400: {
        description: "Invalid input",
    },
    404: {
        description: "Not Found",
    },
    422: {
        description: "Missing or invalid params",
    },
    500: {
        description: "Server error",
    },
};
class Swagger extends actionhero_1.Action {
    constructor() {
        super();
        this.name = "swagger";
        this.description = "return API documentation in the OpenAPI specification";
        this.outputExample = {};
    }
    getLatestAction(route) {
        let matchedAction;
        Object.keys(actionhero_1.api.actions.actions).forEach((actionName) => {
            Object.keys(actionhero_1.api.actions.actions[actionName]).forEach((version) => {
                const action = actionhero_1.api.actions.actions[actionName][version];
                if (action.name === route.action) {
                    matchedAction = action;
                }
            });
        });
        return matchedAction;
    }
    buildSwaggerPaths() {
        const swaggerPaths = {};
        const tags = [];
        Object.keys(actionhero_1.api.routes.routes).map((method) => {
            actionhero_1.api.routes.routes[method].map((route) => {
                const action = this.getLatestAction(route);
                if (!action) {
                    return;
                }
                const tag = action.name.split(":")[0];
                const formattedPath = route.path
                    .replace("/v:apiVersion", "")
                    .replace(/\/:(\w*)/, "/{$1}")
                    .replace(/\/:(\w*)/, "/{$1}")
                    .replace(/\/:(\w*)/, "/{$1}")
                    .replace(/\/:(\w*)/, "/{$1}")
                    .replace(/\/:(\w*)/, "/{$1}");
                swaggerPaths[formattedPath] = swaggerPaths[formattedPath] || {};
                swaggerPaths[formattedPath][method] = {
                    tags: [tag],
                    summary: action.description,
                    // description: action.description, // this is redundant
                    consumes: ["application/json"],
                    produces: ["application/json"],
                    parameters: Object.keys(action.inputs)
                        .sort()
                        .map((inputName) => {
                        return {
                            in: route.path.includes(`:${inputName}`) ? "path" : "query",
                            name: inputName,
                            type: "string",
                            required: action.inputs[inputName].required ||
                                route.path.includes(`:${inputName}`)
                                ? true
                                : false,
                            default: action.inputs[inputName].default !== null &&
                                action.inputs[inputName].default !== undefined
                                ? typeof action.inputs[inputName].default === "object"
                                    ? JSON.stringify(action.inputs[inputName].default)
                                    : typeof action.inputs[inputName].default === "function"
                                        ? action.inputs[inputName].default()
                                        : `${action.inputs[inputName].default}`
                                : undefined,
                        };
                    }),
                    responses,
                    security: [],
                };
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
        });
        return { swaggerPaths, tags };
    }
    async run() {
        const { swaggerPaths, tags } = this.buildSwaggerPaths();
        return {
            swagger: SWAGGER_VERSION,
            info: {
                description: parentPackageJSON.description,
                version: parentPackageJSON.version,
                title: parentPackageJSON.name,
                license: { name: parentPackageJSON.license },
            },
            host: (actionhero_1.config.servers.web.allowedRequestHosts[0]
                ? actionhero_1.config.servers.web.allowedRequestHosts[0]
                    .replace("https://", "")
                    .replace("http://", "")
                : `localhost:${actionhero_1.config.servers.web.port}`),
            basePath: `/api/${API_VERSION}`,
            // tags: tags.map((tag) => {
            //   return { name: tag, description: `topic: ${tag}` };
            // }),
            schemes: actionhero_1.config.servers.web.allowedRequestHosts[0]
                ? ["https", "http"]
                : ["http"],
            paths: swaggerPaths,
            securityDefinitions: {
            // TODO (custom)?
            },
            externalDocs: {
                description: "Learn more about Actionhero",
                url: "https://www.actionherojs.com",
            },
        };
    }
}
exports.Swagger = Swagger;
