import { Action } from "actionhero";
declare const responses: {
    200: {
        description: string;
    };
    400: {
        description: string;
    };
    404: {
        description: string;
    };
    422: {
        description: string;
    };
    500: {
        description: string;
    };
};
export declare class Swagger extends Action {
    constructor();
    getLatestAction(route: any): any;
    buildSwaggerPaths(): {
        swaggerPaths: {
            [path: string]: {
                [method: string]: {
                    tags: string[];
                    summary: string;
                    consumes: string[];
                    produces: string[];
                    parameters: Array<{
                        in: string;
                        name: string;
                        type: string;
                        required: boolean;
                        default: string | number | boolean;
                    }>;
                    responses: typeof responses;
                    security: string[];
                };
            };
        };
        tags: any[];
    };
    run(): Promise<{
        swagger: string;
        info: {
            description: any;
            version: any;
            title: any;
            license: {
                name: any;
            };
        };
        host: string;
        basePath: string;
        schemes: string[];
        paths: {
            [path: string]: {
                [method: string]: {
                    tags: string[];
                    summary: string;
                    consumes: string[];
                    produces: string[];
                    parameters: {
                        in: string;
                        name: string;
                        type: string;
                        required: boolean;
                        default: string | number | boolean;
                    }[];
                    responses: {
                        200: {
                            description: string;
                        };
                        400: {
                            description: string;
                        };
                        404: {
                            description: string;
                        };
                        422: {
                            description: string;
                        };
                        500: {
                            description: string;
                        };
                    };
                    security: string[];
                };
            };
        };
        securityDefinitions: {};
        externalDocs: {
            description: string;
            url: string;
        };
    }>;
}
export {};
